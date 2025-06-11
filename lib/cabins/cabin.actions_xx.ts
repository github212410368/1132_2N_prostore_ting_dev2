'use server';

import { PrismaClient } from '@/lib/generated/prisma/client';
import { Prisma } from '@/lib/generated/prisma/client';
import { convertToPlainObject, formatError } from '@/lib/utils';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { insertCabinSchema, updateCabinSchema } from '../validator';

const prisma = new PrismaClient();

// Get all cabins
export async function getCabins() {
  const data = await prisma.cabin.findMany();

  return data;
}

// Get single cabin by it's ID
export async function getCabinById(productId: string) {
  const data = await prisma.cabin.findFirst({
    where: { id: productId },
  });

  return convertToPlainObject(data);
}

// Delete a cabin
export async function deleteCabin(id: string) {
  try {
    const productExists = await prisma.cabin.findFirst({
      where: { id },
    });

    if (!productExists) throw new Error('Product not found');

    await prisma.cabin.delete({ where: { id } });

    revalidatePath('/admin/cabins');

    return {
      success: true,
      message: 'Product deleted successfully',
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}

// Update a cabin
export async function updateCabin(data: z.infer<typeof updateCabinSchema>) {
  try {
    const product = updateCabinSchema.parse(data);
    const productExists = await prisma.product.findFirst({
      where: { id: product.id },
    });

    if (!productExists) throw new Error('Product not found');

    await prisma.product.update({
      where: { id: product.id },
      data: product,
    });

    revalidatePath('/admin/products');

    return {
      success: true,
      message: 'Product updated successfully',
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}

// Create a cabin
export async function createCabin(data: z.infer<typeof insertCabinSchema>) {
  try {
    const product = insertCabinSchema.parse(data);
    console.log('product', product);
    await prisma.cabin.create({ data: product });

    revalidatePath('/admin/cabins');

    return {
      success: true,
      message: 'Product created successfully',
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}
