const Node = () => {
  let data;
  let left;
  let right;

  const getData = () => data;
  const setData = (value) => {
    data = value;
  };

  return {
    getData,
    setData,
  };
};

export default Node;
