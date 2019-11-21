const calculateEntryExit = function(distance) {
  console.log("distance", distance);
  // variables named based on y = mx + b
  distance += 15 / 6;
  var m = Math.random() / Math.random();
  if (Math.random() < 0.5) {
    m = -m;
  }

  // location of earth in terms of percent of height & width (e.g. middle)
  var H = 50;

  var b = H * (1 - m) - distance * Math.sqrt(1 + m ** 2);

  let entry, exit;
  if (b < 0) {
    entry = [-b / m, 0];
  } else if (b > 100) {
    entry = [(100 - b) / m, 100];
  } else {
    entry = [0, b];
  }

  // represents y when x === 100
  var y100 = m * 100 + b;
  if (y100 < 0) {
    exit = [-b / m, 0];
  } else if (y100 > 100) {
    exit = [(100 - b) / m, 100];
  } else {
    exit = [100, y100];
  }

  return [entry, exit].map(tuple => tuple.map(num => Math.round(num * 6)));
};

const transformAsteroidData = data => {
  const scale = 2000000;
  console.log(
    data.map(asteroid =>
      Math.floor(
        Number(asteroid.close_approach_data[0].miss_distance.kilometers) / scale
      )
    )
  );
  const transformed = data.map(asteroid => {
    const missDist = +asteroid.close_approach_data[0].miss_distance.kilometers;

    const [[startTop, startLeft], [endTop, endLeft]] = calculateEntryExit(
      missDist / scale
    );

    return { startTop, startLeft, endTop, endLeft, duration: 5 };
  });
  console.log(transformed);
  return transformed;
};

export default transformAsteroidData;
