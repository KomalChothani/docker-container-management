import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    //English translations here
                    message: {
                        Created_Container: 'Created Container',
                        Started_Container: 'Started Container',
                        Running_Container: 'Running Container',
                        Paused_Container: 'Paused Container',
                        Restarted_Container: 'Restarted Container',
                        Stopped_OR_Exited_Container: 'Stopped/Exited Container',
                        Dead_Container: 'Dead Container',
                    },
                    errMessage: {
                        No_Container_Created: 'Currently no container is created',
                        No_Container_Started: 'Currently no container is started',
                        No_Container_Running: 'Currently no container is in running state',
                        No_Container_Paused: 'Currently no container is in paused state',
                        No_Container_Restarted: 'Currently no container is restarted',
                        No_Container_Stopped_OR_Exited: 'Currently no container is stopped',
                        NO_Container_Dead: 'Currently no container is dead',
                    }
                },
            },
            de: {
                translation: {
                    //German translations here
                    message: {
                        Created_Container: 'Erstellter Container',
                        Started_Container: 'Gestarteter Container',
                        Running_Container: 'Laufender Container',
                        Paused_Container: 'Angehaltener Container',
                        Restarted_Container: 'Wieder gestarteter Container',
                        Stopped_OR_Exited_Container: 'Angehaltener/erregter Container',
                        Dead_Container: 'Toter Container',
                    },
                    errMessage: {
                        No_Container_Created: 'Zurzeit wird kein Container erstellt',
                        No_Container_Started: 'Zurzeit ist kein Container gestartet',
                        No_Container_Running: 'Zurzeit befindet sich kein Container im laufenden Betrieb',
                        No_Container_Paused: 'Zurzeit befindet sich kein Container im Pausenzustand',
                        No_Container_Restarted: 'Zurzeit wird kein Container neu gestartet',
                        No_Container_Stopped_OR_Exited: 'Zurzeit ist kein Container gestoppt',
                        NO_Container_Dead: 'Derzeit ist kein Container tot',
                    }
                },
            },
        },
        lng: "en",
        fallbackLng: "en",
    });

export default i18n;
