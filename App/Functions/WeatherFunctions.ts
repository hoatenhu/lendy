export const getWeatherData = (weatherData: any) => {
  const tempDays = weatherData?.list.map((item: any) => ({
    day: new Date(item.dt * 1e3).toLocaleString('en-us', {weekday: 'long'}),
    temp: Math.round(item.main.temp - 273),
  }));
  let pre = {} as any;
  tempDays?.forEach(function (ob: any) {
    pre[ob.day] =
      pre[ob.day] === undefined
        ? ob
        : Array.isArray(pre[ob.day])
        ? pre[ob.day].concat([ob])
        : [pre[ob.day]].concat([ob]);
  });
  const avgPre = Object.values(pre);
  const avgTempDays = avgPre.map((item: any) => {
    const initialValue = 0;
    const sumWithInitial = Array.isArray(item)
      ? item.reduce(
          (previousValue: any, currentValue: any) =>
            previousValue + currentValue.temp,
          initialValue,
        )
      : item.temp;
    return {
      day: item.day ?? item[0].day,
      temp: Math.round(sumWithInitial / item.length),
    };
  });
  const now = new Date().toLocaleString('en-us', {
    weekday: 'long',
  });

  if (now === avgTempDays?.[0]?.day) {
    return avgTempDays.slice(1, 5);
  }
  return avgTempDays.slice(0, 4);
};
