import TopListItem from '../../Components/TopListItem/TopListItem';
import './TopList.scss';
import gold from '../../assets/img/Gold.svg';
import silver from '../../assets/img/Silver.svg';
import bronze from '../../assets/img/Bronze.svg';

function TopList() {
  return (
    <div className="top-list-container">
      <div className="top-list-container__description">
        <h2 className="top-list-container__description-header">
          Partners of the months
        </h2>
        <p className="top-list-container__description-paragraph">
          The list is updated every 30 days. Everyone can be a leader!
        </p>
        <ul className="top_list__ul">
          <TopListItem
            icon={gold}
            profit={'107,370'}
            registrations={'7,786'}
            sales={'7,141'}
          />
          <TopListItem
            icon={silver}
            profit={'78,315'}
            registrations={'5,264'}
            sales={'5,221'}
          />
          <TopListItem
            icon={bronze}
            profit={'51,039'}
            registrations={'3,669'}
            sales={'3,450'}
          />
        </ul>
      </div>
    </div>
  );
}

export default TopList;
