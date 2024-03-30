export default function RecentDonations({donations}) {
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        {donations.map((amm) => <li key={amm.id}><span>{amm.name} donated ${amm.amount}</span><div>{amm.caption}</div></li>)}
      </ul>
    </section>
  );
}
