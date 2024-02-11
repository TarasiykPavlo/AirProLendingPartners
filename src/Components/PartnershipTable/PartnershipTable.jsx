import './PartnershipTable.scss';
export default function PartnershipTable(params) {
  return (
    <table className="upper_table">
      <thead>
        <tr>
          <th scope="col" className="">
            TYPES OF VOLUME
          </th>
          <th scope="col">CONDITIONS</th>
          <th scope="col">PERSENT</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">AV (active income)</th>
          <td>Personal Selling</td>
          <td>30%</td>
        </tr>
        <tr>
          <th scope="row">AV (passive income)</th>
          <td>Repeat Sales</td>
          <td>15%</td>
        </tr>
        <tr>
          <th scope="row">AV (passive income)</th>
          <td>All purchases from new customers are from your referrals</td>
          <td>10%</td>
        </tr>
        <tr>
          <th scope="row">GV (passive income)</th>
          <td>Income from each AV of your partner</td>
          <td>10%</td>
        </tr>
        <tr>
          <th scope="row">GV (passive income)</th>
          <td>Income from each re-sale of your partner's AV</td>
          <td>5%</td>
        </tr>
      </tbody>
    </table>
  );
}
