export default function Progress({targetAmount, currentAmount}) {
  return (
  <section className="progress">
    <h2>Raised <span className="secondary">${currentAmount}</span> of <span className="secondary">${targetAmount}</span></h2>
  </section>);
} 
