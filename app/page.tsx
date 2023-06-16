import { Badge, Card, Text, Metric, Flex, ProgressBar } from '@tremor/react';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex'>
        <Card className='max-w-xs mx-auto'>
          <Text>Sales</Text>
          <Metric>$ 71,465</Metric>
          <Flex className='mt-4'>
            <Text>32% of annual target</Text>
            <Text>$ 225,000</Text>
          </Flex>
          <ProgressBar value={32} className='mt-2' />

          <Badge size='xs'>live</Badge>

          <Badge size='sm'>live</Badge>

          <Badge size='md'>live</Badge>

          <Badge size='lg'>live</Badge>

          <Badge size='xl'>live</Badge>
        </Card>
      </div>
    </main>
  );
}
