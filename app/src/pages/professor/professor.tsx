import { type FC, useEffect, useState } from 'react';
import { Select, Slider } from 'antd';
import { useDispatch } from 'react-redux';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

import { Page } from 'widgets';
import { PATHS, TASKS_CONFIGURATION } from 'config';
import { taskActions } from 'store/task';

import { ButtonHash } from 'shared/components';
import { type ITemplateProps } from './types';
import styles from './professor.module.scss';

const sections =
    TASKS_CONFIGURATION.map((task) => ({ value: task.section, label: task.section_name }));

export const ProfessorPage: FC = () => {
  const [sectionName, setSectionName] = useState('integrals');
  const [section, setSection] = useState(TASKS_CONFIGURATION[0]);

  useEffect(() => {
    if (section.section !== sectionName) {
      const newSection =
        TASKS_CONFIGURATION.find((item) => item.section === sectionName) ??
        TASKS_CONFIGURATION[0];
      setSection(newSection);
    }
  }, [section.section, sectionName]);

  return (
    <Page className={styles.wrapper}>
      <div className={styles.section}>
        <Select
          value={sectionName}
          onChange={(val) => { setSectionName(val); }}
          options={sections}
        />
        <p className={styles.sectionName}>
          {section.section_name}
        </p>
        {section.templates.map((template) => <Template key={template.id} template={template} />)}
      </div>
      <ButtonHash type="primary" href={PATHS.QR}>Сгенерировать код варианта</ButtonHash>
    </Page>
  );
};

const Template: FC<ITemplateProps> = ({ template }) => {
  const [value, setValue] = useState(0);

  const dispatch = useDispatch();

  const handleChange = (newValue: number) => {
    setValue(newValue);

    if (newValue === 0) {
      dispatch(taskActions.removeTask({ id: template.id }));
      return;
    }
    dispatch(taskActions.editSelectedTask({
      id: template.id,
      amount: newValue
    }));
  };

  return (
    <div className={styles.templateContainer}>
      <BlockMath>{template.view}</BlockMath>
      <BlockMath>{template.template}</BlockMath>
      <div className={styles.slider}>
        <p>{ value }</p>
        <Slider
          className={styles.templateSlider}
          value={value}
          onChange={(newValue) => { handleChange(newValue); }}
          max={10}
        />
      </div>
    </div>
  );
};
