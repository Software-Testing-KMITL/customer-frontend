import { render, screen, fireEvent } from '@testing-library/react';
import { ProductBadge } from '@/components/product';

describe('Product Badge', () => {
  const category = 'shirt';
  test('should render correctly', () => {
    render(<ProductBadge category={category} />);

    const Badge = screen.getByText(category);

    expect(Badge).toBeDefined();
  });
});
