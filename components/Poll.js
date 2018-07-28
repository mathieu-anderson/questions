const pollStyle = {
  width: '50%',
  textAlign: 'left'
};

const Poll = (props) => {
  return (
    <table style={pollStyle}>
      <tr>
        <th>Choice</th>
        <th>Votes</th>
        <th>%</th>
        <th />
      </tr>
      <tr>
        <td>Yes</td>
        <td>35</td>
        <td>60%</td>
        <td><button type=''>Vote!</button></td>
      </tr>
      <tr>
        <td>No</td>
        <td>8</td>
        <td>40%</td>
        <td><button type=''>Vote!</button></td>
      </tr>
    </table>
  );
};

export default Poll;
