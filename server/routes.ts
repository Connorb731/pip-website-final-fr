import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { insertContactSchema, insertVenueSchema, insertAdvertiserSchema } from "@shared/schema";

// Contact form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  business: z.string().min(2),
  message: z.string().optional(),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post('/api/contact', async (req: Request, res: Response) => {
    try {
      // Validate form data
      const validatedData = contactFormSchema.parse(req.body);
      
      // Store in database
      await storage.createContactSubmission(validatedData);
      
      // Return success
      res.status(200).json({ success: true, message: 'Form submitted successfully' });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, message: 'Invalid form data', errors: error.errors });
      } else {
        console.error('Error processing contact form:', error);
        res.status(500).json({ success: false, message: 'Server error' });
      }
    }
  });

  // Venues API endpoints
  app.post('/api/venues', async (req: Request, res: Response) => {
    try {
      const venueData = insertVenueSchema.parse(req.body);
      const newVenue = await storage.createVenue(venueData);
      res.status(201).json(newVenue);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, message: 'Invalid venue data', errors: error.errors });
      } else {
        console.error('Error creating venue:', error);
        res.status(500).json({ success: false, message: 'Server error' });
      }
    }
  });

  app.get('/api/venues', async (_req: Request, res: Response) => {
    try {
      const venues = await storage.getVenues();
      res.json(venues);
    } catch (error) {
      console.error('Error fetching venues:', error);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  });

  app.get('/api/venues/:id', async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ success: false, message: 'Invalid ID format' });
      }
      
      const venue = await storage.getVenue(id);
      if (!venue) {
        return res.status(404).json({ success: false, message: 'Venue not found' });
      }
      
      res.json(venue);
    } catch (error) {
      console.error('Error fetching venue:', error);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  });

  // Advertisers API endpoints
  app.post('/api/advertisers', async (req: Request, res: Response) => {
    try {
      const advertiserData = insertAdvertiserSchema.parse(req.body);
      const newAdvertiser = await storage.createAdvertiser(advertiserData);
      res.status(201).json(newAdvertiser);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, message: 'Invalid advertiser data', errors: error.errors });
      } else {
        console.error('Error creating advertiser:', error);
        res.status(500).json({ success: false, message: 'Server error' });
      }
    }
  });

  app.get('/api/advertisers', async (_req: Request, res: Response) => {
    try {
      const advertisers = await storage.getAdvertisers();
      res.json(advertisers);
    } catch (error) {
      console.error('Error fetching advertisers:', error);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  });

  app.get('/api/advertisers/:id', async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ success: false, message: 'Invalid ID format' });
      }
      
      const advertiser = await storage.getAdvertiser(id);
      if (!advertiser) {
        return res.status(404).json({ success: false, message: 'Advertiser not found' });
      }
      
      res.json(advertiser);
    } catch (error) {
      console.error('Error fetching advertiser:', error);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
