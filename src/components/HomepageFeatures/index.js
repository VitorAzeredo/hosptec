import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Documentação de projetos',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        A plataforma pode ser utilizada para documentar os projetos já existentes, e os novos projetos que ainda viram.
      </>
    ),
  },
  {
    title: 'Foco nas soluções',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Você pode utilizar a plataforma para documentar soluções e configurações que são utilizadas no dia a dia.
      </>
    ),
  },
  {
    title: 'Material para estudo',
    //Image: require('@site/static/img/estudo.png').default,
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Vamos concentrar os materias de estudo e tutoriais de apoio na documentação da plataforma.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
