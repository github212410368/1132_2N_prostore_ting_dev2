'use client';

import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import { ControllerRenderProps, useForm } from 'react-hook-form';
import Image from 'next/image';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { updateCabinSchema } from '@/lib/validator';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { Card, CardContent } from '@/components/ui/card';
import { UploadButton } from '@/lib/uploadthing';
import { updateCabin } from '@/lib/cabins/cabin.actions_xx';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';

const UpdateCabinForm_xx = ({
  cabin,
  cabinId,
}: {
  cabin: z.infer<typeof updateCabinSchema>;
  cabinId: string;
}) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof updateCabinSchema>>({
    resolver: zodResolver(updateCabinSchema),
    defaultValues: cabin,
  });

  const onSubmit = async (values: z.infer<typeof updateCabinSchema>) => {};

  return (
    <Form {...form}>
      <form
        method='POST'
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-4'
      >
        {form.formState.errors && (
          <div className='mb-4'>
            {Object.values(form.formState.errors).map((error) => (
              <p key={error.message} className='text-red-500'>
                {error.message}
              </p>
            ))}
          </div>
        )}
        <div className='flex flex-col md:flex-row gap-5'>
          {/* Name */}
          <FormField
            control={form.control}
            name='name'
            render={({
              field,
            }: {
              field: ControllerRenderProps<
                z.infer<typeof updateCabinSchema>,
                'name'
              >;
            }) => (
              <FormItem className='w-full'>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder='Enter product name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
        </div>
        {/* Add other fields similarly */}
        <div>
          <Button
            type='submit'
            size='lg'
            disabled={form.formState.isSubmitting}
            className='button col-span-2 w-full'
          >
            {form.formState.isSubmitting ? 'Submitting' : `Update Product`}
          </Button>
        </div>
      </form>
    </Form>
  );
};
export default UpdateCabinForm_xx;
