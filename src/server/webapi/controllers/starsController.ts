// src/controllers/starsController.ts

import { Request, Response } from 'express';
// import { createDocument, readDocument, updateDocument, deleteDocument, readCollection } from '../../../database/firestore/stars-db';
import { starsCRUD } from "../../../database/firestore";
import { createStarSchema, StarDto, updateStarSchema } from '../../../dto/starDto';


export const createStar = async (req: Request, res: Response) => {
  try {
    const { error, value } = createStarSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details });
    }

    const newStar = value;
    const docId = await starsCRUD.createDocument(newStar);
    res.status(201).json({ message: 'Star created', id: docId });
  } catch (error) {
    console.error('Error creating star:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getAllStars = async (req: Request, res: Response) => {
  try {
    const stars = await starsCRUD.readCollection()
    res.status(200).json(stars);
  } catch (error) {
    console.error('Error getting stars:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export const getStar = async (req: Request, res: Response) => {
  try {
    const starId = req.params.id; // Assuming the star ID is in the URL parameters
    const star = await starsCRUD.readDocument(starId);
    if (star) {
      res.status(200).json(star);
    } else {
      res.status(404).json({ error: 'Star not found' });
    }
  } catch (error) {
    console.error('Error getting star:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateStar = async (req: Request, res: Response) => {
  try {
    const { error, value } = updateStarSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details });
    }

    const starId = req.params.id;
    const updateStarData = value;
    const updatedStar = await starsCRUD.updateDocument(starId, updateStarData);
    res.status(200).json(updatedStar);

  } catch (error) {
    console.error('Error updating star:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export const deleteStar = async (req: Request, res: Response) => {
  try {
    const starId = req.params.id
    await starsCRUD.deleteDocument(starId)
    res.status(200).json({ message: 'star deleted' })
  } catch (error) {
    console.error('Error deleting star:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}