import React, { createContext, useState } from 'react'

import { merge } from 'lodash'

import { CatalogLayoutSettings } from 'app/components/CatalogLayout/settings'

const SettingsContext = createContext({
    settings: CatalogLayoutSettings,
    updateSettings: () => {},
})

export const SettingsProvider = ({ settings, children }) => {
    const [currentSettings, setCurrentSettings] = useState(
        settings || CatalogLayoutSettings
    )

    const handleUpdateSettings = (update = {}) => {
        const marged = merge({}, currentSettings, update)
        setCurrentSettings(marged)
    }

    return (
        <SettingsContext.Provider
            value={{
                settings: currentSettings,
                updateSettings: handleUpdateSettings,
            }}
        >
            {children}
        </SettingsContext.Provider>
    )
}

export default SettingsContext
