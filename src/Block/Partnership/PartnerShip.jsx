import './Partnership.scss';
import PartnershipTable from '../../Components/PartnershipTable/PartnershipTable';
export default function PartnerShip(params) {
  return (
    <div className="partnership" id="Partnership">
      <div className="program">
        <div className="program_text">Partnership Program</div>
      </div>
      <h2>Active Volume(AV):</h2>
      <ol>
        <li>
          Personal Sales (active income): For each sale you make, you receive
          30% of the amount of the client's first purchase.
        </li>
        <li>
          Repeat Sales (passive income): For each subsequent purchase by your
          customers, you receive 15% of the sale.
        </li>
        <li>
          10% of purchases of new customers brought by your referrals (people
          who came from your customers)
        </li>
      </ol>
      <h2>Group Volume (GV):</h2>
      <ol>
        <li>Pasive icome:</li>
        <ul>
          <li>
            - Team building: Attract new partners and recieve 10% of their
            personelsales.
          </li>
          <li>Receive 5% of repeat sales made by your partners's clients</li>
        </ul>
      </ol>
      <h2>Bonuses:</h2>
      <p>
        Cashbacks and Rewards: You and your team can also receive additional
        bonuses and rewards for inviting new clients and participating in
        various competitions.
      </p>
      <h2>Result:</h2>
      <ul>
        <li>- Possibility of earning from 45% of active and repeat sales. </li>
        <li>
          - 10% from purchases of new customers referred by your referrals
        </li>
        <li>
          - The team structure gives you 10% of the personal sales of your
          partners and 5% of the repeat sales of their clients.
        </li>
        <li>- Additional bonuses are also available for you and your team.</li>
      </ul>
      <h2>Table:</h2>
      <PartnershipTable />
      <div className="divider"></div>
      <table className="half_table">
        <tbody>
          <tr>
            <th>Total earnings from:</th>
            <td>70%</td>
          </tr>
        </tbody>
      </table>
      <div className="divider"></div>
      <p>Excellent prospects for total earnings from 70% and above.</p>
      <p>
        Join us and start earning money! This is not just an affiliate program,
        but an opportunity to create a stable and growing income that can grow
        infinitely exponentially as your team develops, expanding your business
        and attracting new partners to your team. Participate in our program and
        open the door to endless earning opportunities!
      </p>
      <h2>Note:</h2>

      <ul>
        Prohibited traffic:
        <li>- multi-accounts</li>
        <li>- blocked users</li>
        <li>- motivated traffic</li>
        <li>- fraud traffic</li>
        <li>
          - traffic from creatives with politicians, officials, celebrities,
          bloggers (if this is not you) and religious figures.
        </li>
      </ul>
    </div>
  );
}
