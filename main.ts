import { Plugin } from 'obsidian';
import ChatPanel from './src/components/ChatPanel';
import SettingsTab from './src/components/SettingsTab';

export default class ObsidianAiAssistant extends Plugin {
    private chatPanel: ChatPanel;
    private settingsTab: SettingsTab;

    async onload() {
        this.chatPanel = new ChatPanel(this.app);
        this.settingsTab = new SettingsTab(this.app);

        this.addRibbonIcon('dice', 'Open AI Assistant', () => {
            this.chatPanel.open();
        });

        this.addSettingTab(this.settingsTab);
    }

    onunload() {
        this.chatPanel.close();
    }
}