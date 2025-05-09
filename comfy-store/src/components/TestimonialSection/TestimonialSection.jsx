import styles from './TestimonialSection.module.css';
import testimonialImg from '@assets/home/testimonial.jpg';

export default function TestimonialSection() {
  return (
    <section className={styles.testimonial}>
      <img src={testimonialImg} alt="Testimonial" />
      <div className={styles.content}>
        <h3>“Working from home has never been more comfy”</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula
          consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
          Vestibulum auctor ornare leo, non suscipit magna interdum eu.
        </p>
        <p className={styles.author}>— Laura Jones</p>
      </div>
    </section>
  );
}
