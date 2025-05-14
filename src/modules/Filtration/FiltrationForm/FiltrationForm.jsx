import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './FiltrationForm.module.css';

const FiltrationForm = () => {
  const { register, watch, setValue } = useForm();
  const [searchParams, setSearchParams] = useSearchParams();

  // 1 Устанавливаем значения в форму из URL при загрузке
  useEffect(() => {
    const from = searchParams.get('from') || '';
    const to = searchParams.get('to') || '';
    const discounted = searchParams.get('discounted') === 'true';
    const sort = searchParams.get('sort') || 'default';

    setValue('from', from);
    setValue('to', to);
    setValue('discounted', discounted);
    setValue('sort', sort);
  }, [searchParams, setValue]);

  // 2 Обновляем параметры в URL при изменении формы
  useEffect(() => {
    const subscription = watch((value) => {
      const params = {};

      if (value.from) params.from = value.from;
      if (value.to) params.to = value.to;
      if (value.discounted) params.discounted = 'true';
      if (value.sort && value.sort !== 'default') params.sort = value.sort;

      setSearchParams(params);
    });

    return () => subscription.unsubscribe();
  }, [watch, setSearchParams]);

  return (
    <form className={styles.wrapper}>
      <div className={styles.box}>
        <label className={styles.inputTitle} htmlFor="from">Price</label>
        <input className={styles.input} {...register("from")} type="number" placeholder='from' id='from' />
        <input className={styles.input} {...register("to")} type="number" placeholder='to' id='to' />
      </div>
      <div className={styles.box}>
        <label className={`${styles.inputTitle} ${styles.checkbox}`} htmlFor="discounted">Discounted items</label>
        <input className={styles.custom} {...register("discounted")} type="checkbox" id="discounted" />

      </div>
      <div className={styles.box}>
        <label className={styles.inputTitle} htmlFor="sort">Sorted</label>
        <select className={styles.select} {...register("sort")} id="sort">
          <option value="default">by default</option>
          <option value="newest">newest</option>
          <option value="decrease">price: high-low</option>
          <option value="increase">price: low-high</option>
        </select>
      </div>
    </form>
  );
};

export default FiltrationForm;