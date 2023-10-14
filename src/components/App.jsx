import user from 'Data/user.json';
import data from 'Data/data.json';
import friends from 'Data/friends.json';
 import transactions from 'Data/transactions.json';

import { Profile } from "./profile/Profile";
import {Statistics} from './stat/Statistics'
import { Friends } from './friends/Friends';
import { Transactions } from './transactions/Transactions';

export const App = () => {
  return (
    <div> 
     <Profile userData={user}/>
     <Statistics title="Upload stats" stats={data} />
     <Friends friends={friends}/>
    <Transactions transactions={transactions}/>
    </div>
  );
};
