import { useState, useEffect } from "react";

const DayThree = () => {
  const [result, setResult] = useState({});

  const getData = async function () {
    await fetch("http://localhost:4000/dayThree")
      .then((response) => response.json())
      .then((res) => setResult({ partOne: res.partOne, partTwo: res.partTwo }));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {result && (
        <p>
          Result part one: {result.partOne}, Result part two {result.partTwo}
        </p>
      )}
    </div>
  );
};

export default DayThree;
