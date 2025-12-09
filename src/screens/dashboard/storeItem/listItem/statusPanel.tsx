import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@src/store';
import SwitchContainer from '@src/otherComponent/switchContainer';
import { itemStatusActions } from '@src/store/redux/store/itemstatus-update-redux';

interface PanelCardProps {
  id: number;
  status: number;
  updateItemStatus: (t: boolean, d: number) => void;
}

const StatusPanel: React.FC<PanelCardProps> = React.memo(({
  id,
  status: initialStatus,
  updateItemStatus,
}) => {
  const [status, setStatus] = useState(Boolean(initialStatus));
  const dispatch = useDispatch();

  const memoizedUpdateItemStatus = useCallback(
    (status: boolean, id: number) => {
      updateItemStatus(status, id);
    },
    [updateItemStatus]
  );

  useEffect(() => {
    if (Boolean(initialStatus) !== status) {
      memoizedUpdateItemStatus(status, id);
    }
  }, [status, initialStatus, id, memoizedUpdateItemStatus]);

  const { statusList } = useSelector((state: RootState) => state.itemUpdateStatus);

  useEffect(() => {
    const item = statusList.find((ele) => ele.itemId === id);
    if (item && status !== Boolean(Number(item.status))) {
      setStatus(Boolean(Number(item.status)));
    }
    console.log(id);
    console.log(statusList);
  }, [statusList, id, status]);

  const handleToggle = () => {
    setStatus((prevStatus) => !prevStatus);
    dispatch(itemStatusActions.statusStore({ itemId: id, status: !status }));
  };

  return <SwitchContainer toggleDarkSwitch={handleToggle} switchOn={status} />;
});

export default StatusPanel;
