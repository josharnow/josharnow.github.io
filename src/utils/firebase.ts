import { analytics } from "@/src/config/firebase";
import { type Analytics, type EventNameString, logEvent } from "firebase/analytics";

// export const logCurrentPage = () => {
//   analytics().setCurrentScreen(window.location.pathname)
//   analytics().logEvent('screen_view')
// };

// export const AnalyticsComponent = () => {
//   const history = useHistory();
//   useEffect(() => {
//     logCurrentPage(); // log the first page visit
//     history.listen(() => {
//       logCurrentPage();
//     });
//   }, [history]);
//   return (<div> </div>);
// };

/**
 * Logs a custom event to the analytics service.
 *
 * @param event - The name of the event to log.
 * @param data - Additional data to include with the event.
 * @returns A Promise that resolves when the event is logged.
 */
export const logCustomEvent = async (event: EventNameString | string, data: object) => {
  if (!analytics) return;

  // console.log("Logging event:", event, data);
  return logEvent(await analytics as Analytics, event as string, data);
  // return logEvent(await analytics as Analytics, 'page_view', {
  //   page_title: "/",
  //   page_path: "/",
  // });
}