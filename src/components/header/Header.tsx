import GovernmentLogo from "../../images/header.png";

export default function Header() {
  return (
    <header className="app-header">
            <div className="app-header-inner text-center">
              <div className="logo">
                <img src={GovernmentLogo} alt="Government Logo" />
              </div>
              <h3>
                Ministry of Public Administration, Provincial Councils and Local
                Government
              </h3>
              <h1>Recruitment Data Collection System</h1>
              <h3>
                කළමනාකරණ සේවා නිලධාරි සේවයේ III ශ්‍රේණියට බඳවා ගැනීමේ විවෘත තරග
                විභාගය -2024(2025) : දෙවන වටය
              </h3>
              <h3> Open Competitive Examination for Recruitment to Class III of the Management Service Officers' Service - 2024 (2025) : Second Round </h3>
              <h3>
                முகாமைத்துவ சேவை உத்தியோகத்தர் சேவையின் தரம் III ற்கு
                ஆடசேர்ப்பதற்கான மட்டுப்படுத்தப்பட்ட போட்டிப் பரீட்சை - 2024(2025) : இரண்டாம் சுற்று
              </h3>
            </div>
          </header>
  );
}