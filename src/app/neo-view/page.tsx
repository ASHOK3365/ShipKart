import NeoProductView from '@/components/product/NeoProductCard';

export const metadata = {
  title: 'Neo Product View | AntiGravity',
  description: 'A premium neumorphic product interface.',
};

export default function NeoViewPage() {
  return (
    <main style={{ maxWidth: '480px', margin: '0 auto', background: '#F0F4F8', minHeight: '100vh' }}>
      <NeoProductView />
    </main>
  );
}
