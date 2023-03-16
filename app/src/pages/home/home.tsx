import { type FC } from 'react';

import { Page } from 'widgets';
import { ButtonLink } from 'shared';
import { PATHS } from 'config';
import qr from 'assets/images/qr.jpg';

import styles from './home.module.scss';

export const HomePage: FC = () => (
  <Page className={styles.wrapper}>
    <img className={styles.qr} src={qr} alt="QR" />
    <div className={styles.info}>
      <p className={styles.desc}>
        Данный генератор позволяет преподавателю определить состав и уровень
        сложности заданий работы.
        Это делается путев выбора конкретных примеров, которые будут включаться в работу с указанием
        количества примеров для каждого студента.
        Конкретные задания будут различны для каждого студента. Конкретный вариант генерируется
        на основе имени и фамилии студента и номера его группы.
      </p>
      <h2 className={styles.subtitle}>Порядок работы</h2>
      <ol className={styles.list}>
        <li>
          Преподавателю нужно сгенерировать вариант. В результате работы должен получиться код,
          который нужно передать студентам.
        </li>
        <li>
          Студент должен сгенерировать задание: ввести полученный код, а также свою фамилию и имя.
          В результате будут сгенерированы индивидуальные задания, состав которых определен
          преподавателем. При генерации не используются функции получения случайного числа,
          поэтому при вводе одних и тех же данных будут получаться одинаковые варианты.
          Разные ФИО или номера групп будут давать разные варианты.
        </li>
      </ol>
    </div>
    <div className={styles.links}>
      <ButtonLink to={PATHS.PROFESSOR}>Сгенерировать вариант</ButtonLink>
      <ButtonLink to={PATHS.STUDENT}>Сгенерировать задание</ButtonLink>
    </div>
  </Page>
);
