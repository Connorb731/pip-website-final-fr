import { 
  users, type User, type InsertUser,
  contactSubmissions, type ContactSubmission, type InsertContactSubmission,
  venues, type Venue, type InsertVenue,
  advertisers, type Advertiser, type InsertAdvertiser
} from "@shared/schema";
import { drizzle } from 'drizzle-orm/neon-serverless';
import { neon, neonConfig } from '@neondatabase/serverless';

// Database connection
neonConfig.fetchConnectionCache = true;
const sql = process.env.DATABASE_URL ? neon(process.env.DATABASE_URL) : undefined;
const db = sql ? drizzle(sql) : undefined;

// Storage interface
export interface IStorage {
  // Users
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact form submissions
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  
  // Venues
  createVenue(venue: InsertVenue): Promise<Venue>;
  getVenues(): Promise<Venue[]>;
  getVenue(id: number): Promise<Venue | undefined>;
  
  // Advertisers
  createAdvertiser(advertiser: InsertAdvertiser): Promise<Advertiser>;
  getAdvertisers(): Promise<Advertiser[]>;
  getAdvertiser(id: number): Promise<Advertiser | undefined>;
}

// In-memory storage implementation (for development/testing)
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactSubmissionsMap: Map<number, ContactSubmission>;
  private venuesMap: Map<number, Venue>;
  private advertisersMap: Map<number, Advertiser>;
  
  private userId: number;
  private contactId: number;
  private venueId: number;
  private advertiserId: number;

  constructor() {
    this.users = new Map();
    this.contactSubmissionsMap = new Map();
    this.venuesMap = new Map();
    this.advertisersMap = new Map();
    
    this.userId = 1;
    this.contactId = 1;
    this.venueId = 1;
    this.advertiserId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Contact submission methods
  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.contactId++;
    const now = new Date();
    const newSubmission: ContactSubmission = { 
      ...submission, 
      id, 
      status: 'new', 
      createdAt: now 
    };
    this.contactSubmissionsMap.set(id, newSubmission);
    return newSubmission;
  }
  
  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissionsMap.values());
  }
  
  // Venue methods
  async createVenue(venue: InsertVenue): Promise<Venue> {
    const id = this.venueId++;
    const now = new Date();
    const newVenue: Venue = { 
      ...venue, 
      id, 
      isActive: true,
      numberOfStations: venue.numberOfStations || 1,
      createdAt: now,
      installationDate: null
    };
    this.venuesMap.set(id, newVenue);
    return newVenue;
  }
  
  async getVenues(): Promise<Venue[]> {
    return Array.from(this.venuesMap.values());
  }
  
  async getVenue(id: number): Promise<Venue | undefined> {
    return this.venuesMap.get(id);
  }
  
  // Advertiser methods
  async createAdvertiser(advertiser: InsertAdvertiser): Promise<Advertiser> {
    const id = this.advertiserId++;
    const now = new Date();
    const newAdvertiser: Advertiser = { 
      ...advertiser, 
      id, 
      isActive: true,
      createdAt: now,
      startDate: advertiser.startDate || null,
      endDate: advertiser.endDate || null
    };
    this.advertisersMap.set(id, newAdvertiser);
    return newAdvertiser;
  }
  
  async getAdvertisers(): Promise<Advertiser[]> {
    return Array.from(this.advertisersMap.values());
  }
  
  async getAdvertiser(id: number): Promise<Advertiser | undefined> {
    return this.advertisersMap.get(id);
  }
}

// PostgreSQL storage implementation
export class PostgresStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    if (!db) return undefined;
    const result = await db.select().from(users).where({ id }).limit(1);
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    if (!db) return undefined;
    const result = await db.select().from(users).where({ username }).limit(1);
    return result[0];
  }

  async createUser(user: InsertUser): Promise<User> {
    if (!db) throw new Error('Database not connected');
    const result = await db.insert(users).values(user).returning();
    return result[0];
  }
  
  // Contact submission methods
  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    if (!db) throw new Error('Database not connected');
    const result = await db.insert(contactSubmissions).values(submission).returning();
    return result[0];
  }
  
  async getContactSubmissions(): Promise<ContactSubmission[]> {
    if (!db) return [];
    return await db.select().from(contactSubmissions).orderBy({ createdAt: 'desc' });
  }
  
  // Venue methods
  async createVenue(venue: InsertVenue): Promise<Venue> {
    if (!db) throw new Error('Database not connected');
    const result = await db.insert(venues).values(venue).returning();
    return result[0];
  }
  
  async getVenues(): Promise<Venue[]> {
    if (!db) return [];
    return await db.select().from(venues).orderBy({ name: 'asc' });
  }
  
  async getVenue(id: number): Promise<Venue | undefined> {
    if (!db) return undefined;
    const result = await db.select().from(venues).where({ id }).limit(1);
    return result[0];
  }
  
  // Advertiser methods
  async createAdvertiser(advertiser: InsertAdvertiser): Promise<Advertiser> {
    if (!db) throw new Error('Database not connected');
    const result = await db.insert(advertisers).values(advertiser).returning();
    return result[0];
  }
  
  async getAdvertisers(): Promise<Advertiser[]> {
    if (!db) return [];
    return await db.select().from(advertisers).orderBy({ name: 'asc' });
  }
  
  async getAdvertiser(id: number): Promise<Advertiser | undefined> {
    if (!db) return undefined;
    const result = await db.select().from(advertisers).where({ id }).limit(1);
    return result[0];
  }
}

// Export the appropriate storage implementation based on environment
export const storage = process.env.DATABASE_URL ? new PostgresStorage() : new MemStorage();
