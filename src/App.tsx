import Desktop from "@/components/desktop";
import Taskbar from "@/components/taskbar";
import Window from "@/components/window";
import { useState } from "react";

const App: React.FC = () => {
    const [isWindowOpen, setIsWindowOpen] = useState(true);

    return (
    <>
        <Desktop />
        <Taskbar />
        {isWindowOpen && (<Window url="https://example.com" onClose={() => setIsWindowOpen(false)} />)}
    </>
    );
};

export default App;