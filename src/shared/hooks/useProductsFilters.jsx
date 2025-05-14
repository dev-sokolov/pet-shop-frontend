import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';

export const useProductsFilters = (cards = []) => {
  const [searchParams] = useSearchParams();

  const filters = {
    from: searchParams.get('from'),
    to: searchParams.get('to'),
    discounted: searchParams.get('discounted') === 'true',
    sort: searchParams.get('sort') || 'default',
  };

  const filteredCards = useMemo(() => {
    const { from, to, discounted, sort } = filters;
    let result = [...cards];

    // Фильтрация
    result = result.filter(item => {
      const price = item.discont_price || item.price;
      if (from && price < parseFloat(from)) return false;
      if (to && price > parseFloat(to)) return false;
      if (discounted && !item.discont_price) return false;
      return true;
    });

    // Сортировка
    switch (sort) {
      case 'increase':
        result.sort((a, b) => (a.discont_price || a.price) - (b.discont_price || b.price));
        break;
      case 'decrease':
        result.sort((a, b) => (b.discont_price || b.price) - (a.discont_price || a.price));
        break;
      case 'newest':
        result.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
        break;
      default:
        break;
    }

    return result;
  }, [cards, filters]);

  return { filteredCards, filters };
};