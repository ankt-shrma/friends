import React from 'react';
import Robot from './Robot';

const Cardlist = ({ robots }) => {
    return (
        <div>{
            robots.map((user, i) => {
                return (
                    <Robot
                        key={robots[i].id}
                        id={robots[i].id}
                        name={robots[i].name}
                        email={robots[i].email}
                    />
                )
            })
        }
        </div>
    );
}

export default Cardlist;