import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';

import NewColorbox from './NewColorbox';

const ColorList = props => {
  return (
    <div style={{ height: '100%',marginTop: '5px' }}>
      {props.colors.map((color,i) => (
        <NewColorbox
          index={i}
          key={color.name}
          deleteColor={props.deleteColor}
          color={color}
        />
      ))}
    </div>
  );
};

export default SortableContainer(ColorList);
