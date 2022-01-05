import { parseISO, format } from "date-fns";
import { es } from "date-fns/locale/es";

export default function DateFormatter({ dateString }) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>{format(date, "PPP", { locale: es })}</time>
  );
}
