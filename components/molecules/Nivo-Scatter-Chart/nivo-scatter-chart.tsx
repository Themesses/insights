import { ResponsiveScatterPlot } from "@nivo/scatterplot";

const data = [{
  id: "hello",
  data: [
    {
      x: 88,
      y: 103
    },
    {
      x: 65,
      y: 64
    },
    {
      x: 83,
      y: 64
    },
    {
      x: 58,
      y: 114
    },
    {
      x: 39,
      y: 7
    },
    {
      x: 73,
      y: 28
    },
    {
      x: 45,
      y: 83
    },
    {
      x: 45,
      y: 4
    },
    {
      x: 45,
      y: 36
    },
    {
      x: 31,
      y: 81
    },
    {
      x: 60,
      y: 58
    },
    {
      x: 44,
      y: 90
    },
    {
      x: 0,
      y: 22
    },
    {
      x: 4,
      y: 93
    },
    {
      x: 70,
      y: 31
    },
    {
      x: 75,
      y: 33
    },
    {
      x: 52,
      y: 84
    },
    {
      x: 13,
      y: 103
    },
    {
      x: 75,
      y: 52
    },
    {
      x: 41,
      y: 32
    },
    {
      x: 74,
      y: 17
    },
    {
      x: 93,
      y: 36
    },
    {
      x: 40,
      y: 106
    },
    {
      x: 0,
      y: 59
    },
    {
      x: 60,
      y: 55
    },
    {
      x: 45,
      y: 38
    },
    {
      x: 92,
      y: 99
    },
    {
      x: 27,
      y: 80
    },
    {
      x: 36,
      y: 80
    },
    {
      x: 60,
      y: 39
    },
    {
      x: 55,
      y: 42
    },
    {
      x: 50,
      y: 90
    },
    {
      x: 53,
      y: 42
    },
    {
      x: 21,
      y: 109
    },
    {
      x: 10,
      y: 41
    },
    {
      x: 44,
      y: 12
    },
    {
      x: 93,
      y: 10
    },
    {
      x: 14,
      y: 99
    },
    {
      x: 46,
      y: 48
    },
    {
      x: 58,
      y: 3
    },
    {
      x: 16,
      y: 75
    },
    {
      x: 19,
      y: 111
    },
    {
      x: 6,
      y: 58
    },
    {
      x: 83,
      y: 28
    },
    {
      x: 17,
      y: 29
    },
    {
      x: 98,
      y: 89
    },
    {
      x: 73,
      y: 102
    },
    {
      x: 35,
      y: 72
    },
    {
      x: 22,
      y: 24
    },
    {
      x: 96,
      y: 61
    }
  ]
}];

const NivoScatterChart = () => {
  return (
    <ResponsiveScatterPlot
      data={data}
      margin={{ top: 60, right: 140, bottom: 70, left: 90 }}
      xScale={{ type: "linear", min: 0, max: "auto" }}
      xFormat=">-.2f"
      yScale={{ type: "linear", min: 0, max: "auto" }}
      yFormat=">-.2f"
      blendMode="multiply"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "weight",
        legendPosition: "middle",
        legendOffset: 46
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "size",
        legendPosition: "middle",
        legendOffset: -60
      }}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 130,
          translateY: 0,
          itemWidth: 100,
          itemHeight: 12,
          itemsSpacing: 5,
          itemDirection: "left-to-right",
          symbolSize: 12,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1
              }
            }
          ]
        }
      ]}
    />
  );
};

export default NivoScatterChart;