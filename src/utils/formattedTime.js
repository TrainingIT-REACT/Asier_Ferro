import { addSeconds, format } from "date-fns";

export default seconds => {
  var helperDate = addSeconds(new Date(0), seconds);
  return format(helperDate, "mm:ss");
};
