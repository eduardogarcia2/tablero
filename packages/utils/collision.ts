import {
  Ellipse,
  Point,
  Polygon,
  Shape,
  pointInEllipse,
  pointInPolygon,
  pointOnCurve,
  pointOnEllipse,
  pointOnLine,
  pointOnPolycurve,
  pointOnPolygon,
  pointOnPolylines,
} from "./geometry";

// check if the given point is considered on the given shape's border
export const isPointOnShape = (point: Point, shape: Shape, tolerance = 0) => {
  // get the distance from the given point to the given element
  // check if the distance is within the given epsilon range
  switch (shape.type) {
    case "polygon":
      return pointOnPolygon(point, shape.data, tolerance);
    case "ellipse":
      return pointOnEllipse(point, shape.data as Ellipse);
    case "line":
      return pointOnLine(point, shape.data, tolerance);
    case "polyline":
      return pointOnPolylines(point, shape.data, tolerance);
    case "curve":
      return pointOnCurve(point, shape.data, tolerance);
    case "polycurve":
      return pointOnPolycurve(point, shape.data, tolerance);
    default:
      throw Error(`shape ${shape} is not implemented`);
  }
};

// check if the given point is considered on the element's border
export const isPointInShape = (point: Point, shape: Shape) => {
  switch (shape.type) {
    case "polygon":
      return pointInPolygon(point, shape.data);
    case "line":
      return pointOnLine(point, shape.data);
    case "curve":
      return pointOnCurve(point, shape.data);
    case "ellipse":
      return pointInEllipse(point, shape.data);
    case "polyline":
      return pointOnPolylines(point, shape.data);
    case "polycurve":
      return pointOnPolycurve(point, shape.data);
    default:
      throw Error(`shape ${shape} is not implemented`);
  }
};

// check if the given element is in the given bounds
export const isPointInBounds = (point: Point, bounds: Polygon) => {
  return pointInPolygon(point, bounds);
};