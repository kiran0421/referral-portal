import  Header  from "./components/layout/Header";
import Dashboard from "./pages/Dashboard";
import ShareModal from "./components/modals/ShareModal";
import MoreInfoModal from "./components/modals/MoreInfoModal";
import { ModalProvider, useModal } from "./context/ModalContext";
function GlobalModals() {
  const { infoJob, closeMoreInfo, shareJob, closeShare } = useModal();
  return (
    <>
      {infoJob && <MoreInfoModal job={infoJob} onClose={closeMoreInfo} />}
      {shareJob && <ShareModal job={shareJob} onClose={closeShare} />}
    </>
  );
}
function App(){
    const handleRecommend=()=>{
        console.log('Recommend a friend clicked');
        
    }
  return(
    <ModalProvider>
    <div className="app-shell">
        <Header/>
        <main>
          <Dashboard/>
        </main>
        <GlobalModals/>
    </div>
</ModalProvider>
  )
}
export default App;