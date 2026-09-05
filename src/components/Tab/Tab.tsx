import React, { useState } from 'react';
import './Tabs.css';

interface Tab {
    id: string;
    label: string;
    content: React.ReactNode;
}

interface TabsProps {
    tabs: Tab[];
}

export default function Tabs({ tabs }: TabsProps) {
    const [activeTabId, setActiveTabId] = useState<string>(tabs[0]?.id || '');

    return (
        <div className="tabs">
            <div className="tabs__nav" role="tablist">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        type="button"
                        role="tab"
                        aria-selected={activeTabId === tab.id}
                        className={`tabs__item${activeTabId === tab.id ? ' tabs__item--active' : ''}`}
                        onClick={() => setActiveTabId(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="tabs__content" role="tabpanel">
                {tabs.find((tab) => tab.id === activeTabId)?.content}
            </div>
        </div>
    );
}