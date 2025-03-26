import { View, Text, TouchableOpacity, Modal, ScrollView, Linking } from 'react-native';

// style sheet
import { background, flex } from '../styledComponent/layout';
import { padding, margin, text, fontSize, fontColor, modal } from '../styledComponent/common';

// font
import { font } from '../../App';

{/* 이용약관 모달 */}
export const TermsUseModal = ({ visible, hide }) => (
      <Modal
         animationType='fade'
         transparent={true}
         visible={visible}
         onRequestClose={() => {
            hide(false);
         }}
      >
         <View style={[modal.backDrop, flex.centerCenter]} >
            <View style={[modal.container, background.white, padding.vertical_20, padding.horizontal_20]}>
                  <View style={[flex.row, flex.alignCenter, flex.spaceBetween, margin.bottom_20]}>
                     <Text style={[font.medium, fontSize.size18, fontColor.hex_000]}>개인정보취급방침 및 이용약관</Text>
                     <TouchableOpacity onPress={()=> hide(false)}>
                        <Text style={[fontColor.hex_5277F6, font.regular]}>닫기</Text>
                     </TouchableOpacity>
                  </View>
                  <ScrollView style={[background.white]}>
                     <View style={margin.bottom_40}>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                           ㈜ 마인드엘리베이션(이하 “회사”)은 회원의 개인정보를 중요시하며,
                           "정보통신망 이용촉진 및 정보보호 등에 관한 법률" 등
                           개인정보와 관련된 법령상의 개인정보보호규정 및 방송통신위원회가 제정한 "개인정보보호지침"을 준수하고 있습니다. 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_25]}>
                           회사는 개인정보취급방침을 통하여 회원님께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며,
                           개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려 드립니다. 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_25]}>
                           회사의 '개인정보취급방침'은 관련 법률 및 지침의 변경 또는 내부 운영방침의 변경에 따라 변경될 수 있습니다. 
                           '개인정보취급방침'이 변경될 경우 변경된 '개인정보취급방침'의 사항은 회사의 대표 모바일 서비스 웹사이트 
                           <TouchableOpacity style={modal.hyperlinkText}  onPress={() => Linking.openURL('http://www.mind-el.com')}>
                              <Text style={[fontColor.hex_5277F6, font.regular]}>http://www.mind-el.com</Text>
                           </TouchableOpacity>
                            또는 개별 서비스 공지 사항 등을 통하여 공지합니다.
                        </Text>
                     </View>
                     <View style={margin.bottom_40}>
                        <Text style={[fontColor.hex_000, font.medium, fontSize.size17 ,margin.bottom_20]}>
                           1. 개인정보의 수집 항목 및 수집 방법 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_25]}>
                           회사는 회원가입 시 서비스 제공을 위하여 필요한 최소한의 개인정보만을 수집합니다. 
                        </Text>
                     </View>
                     <View style={[margin.bottom_40]}>
                        <Text style={[fontColor.hex_000, font.medium, fontSize.size17 ,margin.bottom_20]}>
                           가. 개인정보 수집항목 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_25]}>
                           ① 아이디(마인드엘리베이션 서비스 아이디), 비밀번호, 이메일 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_25]}>
                           ② 서비스 이용 과정에서 아래와 같은 정보들이 자동으로 생성되어 수집될 수 있습니다. 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_25]}>
                           - 이동통신 단말기 식별정보 (IMEI) 
                        </Text>
                     </View>
                     <View style={[margin.bottom_40]}>
                        <Text style={[fontColor.hex_000, font.medium, fontSize.size17 ,margin.bottom_20]}>
                           나. 개인정보 수집방법 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_25]}>
                           - 회원 가입, 서비스 이용, 회원정보 수정, 팩스, 전화, 고객센터 문의 
                        </Text>
                     </View>
                     <View style={[margin.bottom_40]}>
                        <Text style={[fontColor.hex_000, font.medium, fontSize.size17 ,margin.bottom_40]}>
                           2. 개인정보의 수집목적 및 이용목적 
                        </Text>
                        <Text style={[fontColor.hex_000, font.medium, fontSize.size17 ,margin.bottom_20]}>
                           가. 마인드엘리베이션 서비스 아이디 서비스 기본 기능 제공 (개인정보 공통관리) 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_25]}>
                           - 마인드엘리베이션 서비스 아이디를 이용하여 회사 및 제휴사가 제공하는 개별 서비스를 이용 가능하도록 제1조 가항의 수집 정보 (이하 “공통관리정보”)가 공동으로 사용됩니다. 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_25]}>
                           - 회원이 가입한 어느 한 개별 서비스에서 공통관리정보를 수정한 경우 그와 같이 수정된 개인정보는 본 서비스 및 회원이 가입한 다른 개별 서비스에서 모두 동일하게 변경됩니다.
                           단, 마인드엘리베이션 서비스 아이디 등 변경이 불가능한 사항은 수정할 수 없습니다.
                        </Text>
                     </View>
                     <View style={[margin.bottom_40]}>
                        <Text style={[fontColor.hex_000, font.medium, fontSize.size17 ,margin.bottom_20]}>
                           나. 회원 관리 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_25]}>
                           - 회원제 서비스 이용 및 제한적 본인 확인제에 따른 본인 확인, 개인식별, 불량회원의 부정 이용 방지와 비인가 사용방지,
                           가입의사 확인, 가입 및 가입횟수 제한, 분쟁 조정을 위한 기록보전, 불만 민원처리, 고지사항 전달 
                        </Text>
                     </View>
                     <View style={[margin.bottom_40]}>
                        <Text style={[fontColor.hex_000, font.medium, fontSize.size17 ,margin.bottom_20]}>
                           다. 마케팅 및 광고에 활용 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_25]}>
                           - 신규 서비스 개발 및 맞춤 서비스 제공, 인구 통계학적 특성에 따른 서비스 제공 및 광고 게재,
                           접속 빈도 파악, 회원의 서비스 이용에 대한 통계 및 이벤트 및 광고성 정보 전달 
                        </Text>
                     </View>
                     <View style={[margin.bottom_40]}>
                        <Text style={[fontColor.hex_000, font.medium, fontSize.size17 ,margin.bottom_20]}>
                           3. 개인정보의 보유기간 및 이용기간 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_25]}>
                           회원의 개인정보는 회사가 회원에게 서비스를 제공하는 기간 동안에 한하여 보유 및 이용됩니다.
                            단, 관계법령의 규정에 의하여 보존할 필요성이 있는 경우에는 관계법령에 따라 일정기간 보존합니다. 
                        </Text>
                     </View>
                     <View style={[margin.bottom_40]}>
                        <Text style={[fontColor.hex_000, font.medium, fontSize.size17 ,margin.bottom_20]}>
                           ※ 관계법령의 규정에 의한 정보보유 사유 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_10]}>
                           - 계약 또는 청약철회 등에 관한 기록 법령의 규정에 의하여 보존할 필요성이 있는 경우에는 관계법령에 따라 일정기간 보존합니다. 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_10]}>
                           보존 이유: 전자상거래 등에서의 소비자보호에 관한 법률 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_25]}>
                           보존 기간: 5년 
                        </Text>

                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_10]}>
                           - 대금 결제 및 재화 등의 공급에 관한 기록 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_10]}>
                           보존 이유: 전자상거래 등에서의 소비자보호에 관한 법률 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_25]}>
                           보존 기간: 5년 
                        </Text>

                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_10]}>
                           - 소비자의 불만 또는 분쟁처리에 관한 기록 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_10]}>
                           보존 이유: 전자상거래 등에서의 소비자보호에 관한 법률 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_15]}>
                           보존 기간: 3년 
                        </Text>
                     </View>
                     <View style={[margin.bottom_40]}>
                        <Text style={[fontColor.hex_000, font.medium, fontSize.size17 ,margin.bottom_20]}>
                           4. 개인정보 파기 절차 및 방법 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_25]}>
                           회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 파기절차 및 방법은 다음과 같습니다. 
                        </Text>
                     </View>
                     <View style={[margin.bottom_40]}>
                        <Text style={[fontColor.hex_000, font.medium, fontSize.size17 ,margin.bottom_20]}>
                           가. 파기절차 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_25]}>
                           회원가입 등을 위해 입력한 회원 정보는 목적이 달성된 후 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유기간 및 이용기간 참조) 일정 기간 저장된 후 파기됩니다.
                           개인정보는 법률에 의한 경우가 아니고서는 보유 목적 이외의 다른 목적으로 이용되지 않습니다. 
                        </Text>
                     </View>
                     <View style={[margin.bottom_40]}>
                        <Text style={[fontColor.hex_000, font.medium, fontSize.size17 ,margin.bottom_20]}>
                           나. 파기방법 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_25]}>
                           전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법으로 파기하며, 종이 문서에 기록, 저장된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다. 
                        </Text>
                     </View>
                     <View style={[margin.bottom_40]}>
                        <Text style={[fontColor.hex_000, font.medium, fontSize.size17 ,margin.bottom_20]}>
                           5. 개인정보의 제공 및 위탁 
                        </Text>
                     </View>
                     <View style={[margin.bottom_40]}>
                        <Text style={[fontColor.hex_000, font.medium, fontSize.size17 ,margin.bottom_20]}>
                           가. 개인정보의 제3자 제공 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_25]}>
                           본 서비스는 고객님의 개인정보를 가입신청서, 서비스이용약관, 개인정보 취급방침 등에서 고지한 범위 내에서 사용하며,
                           동 범위를 초과하여 이용하거나 타인 또는 타기업 기관에 제공하지 않습니다. 
                        </Text>
                     </View>
                     <View style={[margin.bottom_40]}>
                        <Text style={[fontColor.hex_000, font.medium, fontSize.size17 ,margin.bottom_20]}>
                           6. 이용자 및 법정대리인의 권리와 그 행사방법 
                        </Text>
                     </View>
                     <View style={[margin.bottom_40]}>
                        <Text style={[fontColor.hex_000, font.medium, fontSize.size17 ,margin.bottom_20]}>
                           가. 이용자의 권리와 그 행사방법 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_25]}>
                           이용자의 개인정보를 최신의 상태로 정확하게 입력하여 불의의 사고를 예방해 주시기 바랍니다.
                            이용자가 입력한 부정확한 정보로 인해 발생하는 사고의 책임은 이용자 자신에게 있으며 타인 정보의 도용 등 허위 정보를 입력할 경우 회원 자격이 상실될 수 있습니다.
                             이용자는 개인정보를 보호 받을 권리와 함께 스스로를 보호하고 타인의 정보를 침해하지 않을 의무도 가지고 있습니다.
                              비밀번호를 포함한 이용자의 개인정보가 유출되지 않도록 조심하시고 게시물을 포함한 타인의 개인정보를 훼손하지 않도록 유의해 주십시오.
                               만약 이 같은 책임을 다하지 못하고 타인의 정보 및 존엄성을 훼손할 시에는 정보통신망이용촉진 및 정보보호 등에 관한 법률 등에 의해 처벌 받을 수 있습니다. 
                        </Text>
                     </View>
                     <View style={[margin.bottom_40]}>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_25]}>
                           - 개인정보 열람, 정정 요구의 권리 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_25]}>
                           이용자는 언제든지 등록되어 있는 자신의 개인정보를 열람하거나 정정하실 수 있습니다.
                           개인정보 열람 및 정정을 하고자 할 경우에는 회원정보를 클릭하여 직접 열람 또는 정정하거나,
                            개인정보관리책임자 및 담당자에게 서면, 전화 또는 전자우편주소로 연락하시면 지체 없이 조치하겠습니다. 
                        </Text>
                     </View>
                     <View style={[margin.bottom_40]}>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_25]}>
                           - 개인정보 수집, 이용, 제공에 대한 동의 철회의 권리 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_25]}>
                           회원가입 등을 통해 개인정보의 수집, 이용, 제공에 대해 이용자께서 동의하신 내용을 이용자는 철회하실 수 있습니다. 
                           동의 철회는 회원정보를 클릭하거나 개인정보관리 담당자에게 서면, 이메일 주소 등으로 연락하시면 본인 확인 절차 후 개인정보의 삭제 등 필요한 조치를 하겠습니다. 
                        </Text>
                     </View>
                     <View style={[margin.bottom_40]}>
                        <Text style={[fontColor.hex_000, font.medium, fontSize.size17, margin.bottom_25]}>
                           나. 법정대리인의 권리와 그 행사방법 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_25]}>
                           ① 회사는 만14세 미만(이하 “아동”이라 함)의 아동의 개인정보를 수집, 
                           이용 또는 제3자에게 개인정보를 제공하는 경우에는 해당 아동의 법정대리인의 동의를 얻어야 합니다.
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_25]}>
                           ② 법정대리인은 아동의 개인정보에 대한 열람, 정정 및 삭제(동의 철회)를 요청할 수 있습니다. 
                           아동의 개인정보의 열람, 정정, 삭제하고자 할 경우에는 회원정보를 클릭하여 직접 열람, 정정 삭제하시거나, 
                           개인정보 관리책임자에게 서면, 전화 또는 이메일로 연락하시면 지체 없이 조치하겠습니다. 
                        </Text>
                     </View>
                     <View style={[margin.bottom_40]}>
                        <Text style={[fontColor.hex_000, font.medium, fontSize.size17, margin.bottom_25]}>
                           7. 개인정보 자동 수집 장치의 설치/운영 및 거부에 관한 사항 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_25]}>
                        회사는 계정정보를 생성하기 위해 이용자가 모바일에서 마인드엘리베이션 서비스 아이디 입력 시 이동통신 단말기 식별정보 (IMEI) 를 자동으로 수집하게 됩니다. 
                        이용자가 이동통신 단말기 정보를 자동으로 수집하는 것을 거부하는 경우 서비스를 이용할 수 없습니다. 
                        </Text>
                     </View>
                     <View style={[margin.bottom_40]}>
                        <Text style={[fontColor.hex_000, font.medium, fontSize.size17, margin.bottom_25]}>
                           8. 개인정보취급을 위한 기술적 및 관리적 대책 
                        </Text>
                     </View>
                     <View style={[margin.bottom_40]}>
                        <Text style={[fontColor.hex_000, font.medium, fontSize.size17, margin.bottom_25]}>
                           가. 기술적 대책 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_25]}>
                           회사를 이용하는 회원의 개인정보를 취급함에 있어 개인정보가 분실, 도난, 누출, 변조 또는 훼손되지 않도록 안전성 확보를 위하여 아래와 같은 기술적 대책을 적용하고 있습니다. 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_25]}>
                           ① 회원의 개인정보는 외부 망에서 접근 및 침입이 불가능한 내부 망을 활용하여 관리되고 있으며, 파일 및 전송데이터를 암호화하거나 파일 잠금 기능(Lock)을 사용하여 중요한 데이터는 별도의 보안기능을 통해 철저하게 보호되고 있습니다. 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_25]}>
                           ② 회사는 백신프로그램을 이용하여 컴퓨터바이러스에 의한 피해를 방지하기 위한 조치를 취하고 있습니다. 백신프로그램은 주기적으로 업데이트되며 갑작스런 바이러스가 출현할 경우 백신이 나오는 즉시 이를 적용함으로써 개인정보가 침해되는 것을 방지하고 있습니다. 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_25]}>
                           ③ 회사는 암호알고리즘 등의 이용을 통하여 네트워크상에서 개인정보를 안전하게 전송할 수 있는 보안장치를 채택하고 있습니다. 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_25]}>
                           ④ 해킹 등 외부침입에 대비하여 침입차단시스템 및 침입탐지시스템을 운영하여 사내 네트워크를 보호하고, 각 서버마다 접근제어시스템을 설치하여 보안을 강화하고 있습니다. 
                        </Text>
                     </View>
                     <View style={[margin.bottom_40]}>
                        <Text style={[fontColor.hex_000, font.medium, fontSize.size17, margin.bottom_25]}>
                           나. 관리적 대책 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_25]}>
                           ① 회사는 개인정보의 안전한 보호를 위하여 주요 시스템 및 설비에 대하여 외부 전문기관으로부터 정보보호관리체계 인증 등 객관적인 인증을 받아 운영되고 있습니다. 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_25]}>
                           ② 회사에 회원의 개인정보에 대한 접근 및 관리에 필요한 절차 등을 마련하여 소속 직원으로 하여금 이를 숙지하고 준수하도록 하고 있습니다. 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_15]}>
                           ③ 회사는 회원의 개인정보를 취급할 수 있는 자를 최소한으로 제한하고 있습니다. 회원의 개인정보를 취급할 수 있는 자는 아래와 같습니다. 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_10]}>
                           - 회원을 직•간접 상대로 하여 마케팅 업무를 수행하는 자 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_10]}>
                           - 개인정보관리책임자 및 개인정보보호담당자 등 개인정보관리•보호업무를 수행하는 자
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_25]}>
                           - 기타 업무상 개인정보의 취급이 불가피한 자 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_25]}>
                           ④ 회사에서 컴퓨터를 이용하여 회원의 개인정보를 처리하는 경우 개인정보에 대한 접근권한을 가진 담당자를 지정하여 식별부호(ID) 및 비밀번호를 부여하고, 해당 비밀번호를 정기적으로 갱신하고 있습니다. 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_25]}>
                           ⑤ 개인정보를 취급하는 직원을 대상으로 새로운 보안 기술 습득 및 개인정보보호 의무 등에 관해 정기적인 사내 교육 및 외부 위탁교육을 실시하고 있습니다. 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_25]}>
                           ⑥ 신규직원 채용 시 정보보호서약서 또는 개인정보보호서약서에 서명함으로써 직원에 의한 정보유출을 사전에 방지하고 개인정보취급방침에 대한 이행사항 및 직원의 준수여부를 감사하기 위한 내부절차를 마련하여 지속적으로 시행하고 있습니다. 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_25]}>
                           ⑦ 직원 퇴직 시 비밀유지서약서에 서명함으로써 회원의 개인정보를 취급하였던 자가 직무상 알게 된 개인정보를 훼손•침해 또는 누설하지 않도록 하고 있습니다. 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_25]}>
                           ⑧ 개인정보 취급자의 업무 인수인계는 보안이 유지된 상태에서 철저하게 이뤄지고 있으며, 입사 및 퇴사 후 개인정보 침해사고에 대한 책임을 명확하게 규정하고 있습니다. 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_25]}>
                           ⑨ 서비스이용계약체결 또는 서비스제공을 위하여 회원의 신용카드번호, 은행결제계좌 등 대금결제에 관한 정보를 수집하거나 회원에게 제공하는 경우 당해 회원이 본인임을 확인하기 위하여 필요한 조치를 취하고 있습니다. 
                        </Text>
                     </View>
                     <View style={[margin.bottom_40]}>
                        <Text style={[fontColor.hex_000, font.medium, fontSize.size17, margin.bottom_25]}>
                            다. 물리적 대책 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_25]}>
                           ① 개인정보와 개인정보처리시스템의 안전한 보관을 위하여 물리적 잠금장치 등의 물리적 접근방지를 위한 보호조치를 취하고 있습니다. 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_25]}>
                            ② 전산실 및 자료보관실 등을 특별 보호구역으로 설정하여 출입 통제 등 출입관리절차를 시행하고 있습니다. 
                        </Text>
                     </View>
                     <View style={[margin.bottom_40]}>
                        <Text style={[fontColor.hex_000, font.medium, fontSize.size17, margin.bottom_25]}>
                           9. 링크사이트 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_25]}>
                           회사에서는 회원께 다른 회사의 홈페이지 또는 자료에 대한 링크를 제공할 수 있습니다. 
                           이 경우 회사는 외부사이트 및 자료에 대한 아무런 통제권이 없으므로 그로부터 제공받는 서비스나 자료의 유용성에 대해 책임질 수 없으며 보증할 수 없습니다. 
                           회사가 포함하고 있는 링크를 클릭(click)하여 타 사이트(site)의 페이지로 옮겨갈 경우 해당 사이트의 개인정보취급방침은 회사의 개인정보취급방침과 무관하므로 새로 방문한 사이트의 정책을 검토해 보시기 바랍니다. 
                        </Text>
                     </View>
                     <View style={[margin.bottom_40]}>
                        <Text style={[fontColor.hex_000, font.medium, fontSize.size17, margin.bottom_25]}>
                           10. 개인정보관리책임자 및 담당자 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_25]}>
                           회사는 회원의 개인정보보호를 가장 중요시하며, 회원의 개인정보가 훼손, 침해 또는 누설되지 않도록 최선을 다하고 있습니다. 
                           회원께서는 회사의 서비스를 이용하시며 발생하는 모든 개인정보보호 관련 민원을 개인정보관리책임자 혹은 담당부서로 신고하실 수 있습니다. 
                           회사는 이용자들의 신고사항에 대해 신속하게 충분한 답변을 드릴 것입니다.                         
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_15]}>
                           - 개인정보관리 책임자 : 이정 대표이사                
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_15]}>
                           - 개인정보관리 담당자 : 박선지 (기획영업팀)
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_15]}>
                           - 전화 : 1899-9475            
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_15]}>
                           - 메일 : service@mind-el.com  
                        </Text>
                     </View>
                     <View style={[margin.bottom_40]}>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_25]}>
                           기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다. 
                        </Text>
                        <View style={margin.bottom_15}>
                           <Text style={[fontColor.hex_000, font.regular, margin.bottom_5]}>
                              ① 개인정보침해신고센터
                           </Text>
                           <TouchableOpacity style={[modal.hyperlinkText, margin.left_20]}  onPress={() => Linking.openURL('https://www.118.or.kr/118')}>
                              <Text style={[fontColor.hex_5277F6, font.regular]}>www.118.or.kr/118</Text>
                           </TouchableOpacity>
                        </View>
                        <View style={margin.bottom_15}>
                           <Text style={[fontColor.hex_000, font.regular, margin.bottom_5]}>
                              ② 정보보호마크인증위원회 
                           </Text>
                           <TouchableOpacity style={[modal.hyperlinkText, margin.left_20]}  onPress={() => Linking.openURL('https://www.eprivacy.or.kr/02-580-0533~4')}>
                              <Text style={[fontColor.hex_5277F6, font.regular]}>www.eprivacy.or.kr/02-580-0533~4</Text>
                           </TouchableOpacity>
                        </View>
                        <View style={margin.bottom_15}>
                           <Text style={[fontColor.hex_000, font.regular, margin.bottom_5]}>
                              ③ 대검찰청 첨단범죄수사과
                           </Text>
                           <TouchableOpacity style={[modal.hyperlinkText, margin.left_20]}  onPress={() => Linking.openURL('http://icic.sppo.go.kr/02-3480-2000')}>
                              <Text style={[fontColor.hex_5277F6, font.regular]}>http://icic.sppo.go.kr/02-3480-2000</Text>
                           </TouchableOpacity>
                        </View>
                        <View style={margin.bottom_15}>
                           <Text style={[fontColor.hex_000, font.regular, margin.bottom_5]}>
                              ④ 경찰청 사이버테러대응센터
                           </Text>
                           <TouchableOpacity style={[modal.hyperlinkText, margin.left_20]}  onPress={() => Linking.openURL('https://www.ctrc.go.kr/02-392-0330')}>
                              <Text style={[fontColor.hex_5277F6, font.regular]}>www.ctrc.go.kr/02-392-0330</Text>
                           </TouchableOpacity>
                        </View>
                     </View>
                     <View style={[margin.bottom_40]}>
                        <Text style={[fontColor.hex_000, font.medium, fontSize.size17, margin.bottom_25]}>
                           11. 고지의 의무 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_25]}>
                           회사의 개인정보취급방침은 법령, 정부의 정책 또는 보안기술의 변경에 따라 내용의 
                           추가 삭제 및 수정이 있을 시에는 이메일 또는 회사 대표 웹사이트 
                           <TouchableOpacity style={modal.hyperlinkText}  onPress={() => Linking.openURL('http://www.Mind-el.com')}>
                                 <Text style={[fontColor.hex_5277F6, font.regular]}>http://www.Mind-el.com</Text>
                           </TouchableOpacity>
                           를 통해 고지할 것입니다. 
                        </Text>
                     </View>
                     <View style={[margin.bottom_40]}>
                        <Text style={[fontColor.hex_000, font.medium, fontSize.size17, margin.bottom_25]}>
                           부칙 
                        </Text>
                        <Text style={[fontColor.hex_000, font.regular, margin.bottom_25]}>
                           (시행일) 개인정보취급방침 시행일자 : 2016년 12월 1일
                        </Text>
                     </View>
               </ScrollView>
            </View>
         </View>
      </Modal>
);

{/* 개인정보 취급방침 모달 */}
export const PrivacyNoticeModal = ({ visible, hide }) => (
   <Modal
      animationType='fade'
      transparent={true}
      visible={visible}
      onRequestClose={() => {
         hide(false);
      }}
   >
      <View style={[modal.backDrop, flex.centerCenter]} >
         <View style={[modal.container, background.white, padding.vertical_20, padding.horizontal_20]}>
            <View style={[flex.row, flex.alignCenter, flex.spaceBetween, margin.bottom_20]}>
               <Text style={[font.medium, fontSize.size18, fontColor.hex_000]}>개인정보 수집 및 이용약관</Text>
               <TouchableOpacity onPress={()=> hide(false)}>
                  <Text style={[fontColor.hex_5277F6, font.regular]}>닫기</Text>
               </TouchableOpacity>
            </View>
            <ScrollView style={[background.white]}>
               <View style={margin.bottom_40}>
                  <Text style={[fontColor.hex_000, font.medium, fontSize.size17, modal.lineHeightArea]}>
                     제1장 총칙 
                  </Text>
               </View>
               <View style={margin.bottom_40}>
                  <Text style={[fontColor.hex_000, font.medium, fontSize.size17, margin.bottom_25, modal.lineHeightArea]}>
                     제 1 조 (목적) 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     본 약관은 ㈜ 마인드엘리베이션 (이하 "회사")이 제공하는 Cloud 서비스 (“서비스”)를 이용함에 있어 회원과 회사 간의 권리, 의무 및 책임 사항, 이용 조건 및 절차 등에 관한 사항과 기타 필요한 사항을 규정함을 목적으로 합니다. 
                  </Text>
               </View>
               <View style={margin.bottom_40}>
                  <Text style={[fontColor.hex_000, font.medium, fontSize.size17, margin.bottom_25, modal.lineHeightArea]}>
                   제２ 조 (정의) 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     본 약관에서 사용하는 용어 및 서비스의 정의는 다음과 같습니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     1. "회원"이라 함은 서비스에 접속하여 본 약관에 따라 개인정보를 제공하고 회원등록을 통해 아이디를 부여 받은 자로서, 
                     서비스와 관련된 정보를 지속적으로 제공 받으며, 회사가 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     2. “아이디”란 회원의 식별과 서비스 이용을 위하여 회원이 선정하고 회사가 승인하는 문자와 숫자의 조합을 말합니다. 
                     마인드엘리베이션 서비스 아이디를 이미 보유하고 있는 이용자는 본 서비스에서 해당 아이디를 그대로 사용할 수 있습니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     3. “마인드엘리베이션 서비스 아이디”란 회사 및 제휴사가 제공하는 각종 서비스를 하나의 아이디로 통합하여 이용 가능하도록 한 통합 아이디를 말합니다 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     4. “비밀번호”란 부여 받은 회원 아이디와 일치된 사람임을 확인하고 회원의 비밀 보호를 위하여 회원 자신이 설정한 문자와 숫자의 조합을 말합니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     5. “서비스 사이트”란 본 서비스를 제공하는 인터넷 홈페이지 
                        <TouchableOpacity style={modal.hyperlinkText}  onPress={() => Linking.openURL('http://www.Mind-el.com')}>
                           <Text style={[fontColor.hex_5277F6, font.regular]}>http://www.Mind-el.com</Text>
                        </TouchableOpacity>
                        을 말합니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     6. “디바이스(Device)”란 본 서비스를 이용하기 위하여 회원이 이용하는 개인용 컴퓨터, PDA, 스마트폰 등의 디지털 기기를 말합니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     7. “클라이언트 (Client)”란 본 서비스를 이용하기 위하여 디바이스에 설치되거나 설치하는 프로그램을 말합니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     8. “모바일 클라이언트 (Mobile Client)”란 스마트폰 등의 이동통신 단말기에서 콘텐츠를 Cloud Live를 통하여 저장 및 전송 받을 수 있게 하는 모바일 콘텐츠 관리 Tool을 말합니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     9. "피씨 클라이언트 (PC Client)”란 PC 내에서 원하는 데이터와 콘텐츠를 Cloud Live를 통하여 저장 및 관리할 수 있게 하는 PC 콘텐츠 관리 Tool을 말합니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     10. “콘텐츠 (Contents)”란 본 서비스를 이용하는 과정에서 유통되는 주소록, 문자메시지, 사진, 동영상 등 기타 일체의 정보를 말합니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     11. “게시물”이라 함은 콘텐츠를 포함한 회원이 올린 글, 이미지, 각종 파일 및 링크, 각종 댓글 등의 정보를 의미합니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     12. “개인정보”라 함은 정보통신망이용촉진및정보보호등에관한법률 제2조 제1항 제6호 “개인정보”를 말합니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     13. “위치정보”라 함은 위치정보의 보호 및 이용 등에 관한 법률 제2조 제1호 “위치정보” 및 “개인위치정보”를 말합니다. 
                  </Text>
               </View>
               <View style={margin.bottom_40}>
                  <Text style={[fontColor.hex_000, font.medium, fontSize.size17, margin.bottom_25, modal.lineHeightArea]}>
                     제 3 조 (약관의 효력 및 변경) 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     1. 회사는 본 약관의 내용은 서비스 사이트 초기 서비스 화면에 게재하여 회원들이 확인가능 하도록 합니다. 
                     다만, 약관의 내용은 회원이 연결화면을 통하여 볼 수 있도록 할 수 있습니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     2. 회사가 본 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행 약관과 함께 제1항의 방식에 따라 개정약관의 적용일자 7일 전부터 적용일자 전일까지 공지합니다. 
                     다만, 회원에게 불리하게 약관을 개정할 경우에는 그 적용일자 30일 이전부터 적용일자 전일까지 공지합니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     3. 회사가 약관을 개정할 경우에는 그 개정약관은 그 적용일자 이후에 체결되는 계약에만 적용되고 그 이전에 이미 체결된 계약에 대해서는 개정전의 약관조항이 그대로 적용됩니다. 
                     다만 이미 계약을 체결한 회원이 개정약관 조항의 적용을 받기를 원하는 뜻을 제2항에 의한 개정약관의 공지기간 내에 회사에 송신하여 회사의 동의를 받은 경우에는 개정약관 조항이 적용됩니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     4. 회사가 전항에 따라 개정약관을 공지 또는 통지하면서 회원에게 30일 기간 내에 의사 표시를 하지 않으면 의사표시가 표명된 것으로 본다는 뜻을 명확하게 공지 또는 통지하였음에도 회원이 명시적으로 거부의 의사표시를 하지 아니한 경우 회원이 개정약관에 동의한 것으로 봅니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     5. 회사는 회원이 변경된 약관에 대한 정보를 알지 못하여 발생하는 피해에 대하여 책임이 없습니다. 
                  </Text>
               </View>
               <View style={margin.bottom_40}>
                  <Text style={[fontColor.hex_000, font.medium, fontSize.size17, margin.bottom_25, modal.lineHeightArea]}>
                     제 4 조 (관계법령의 적용) 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     본 약관은 신의성실의 원칙에 따라 공정하게 적용하며, 본 약관에 명시되지 아니한 사항에 대하여는 관계법령 및 상관례에 따릅니다. 
                  </Text>
               </View>
               <View style={margin.bottom_40}>
                  <Text style={[fontColor.hex_000, font.medium, fontSize.size17, margin.bottom_25, modal.lineHeightArea]}>
                     제2장 이용계약 체결 및 해지 등 
                  </Text>
               </View>
               <View style={margin.bottom_40}>
                  <Text style={[fontColor.hex_000, font.medium, fontSize.size17, margin.bottom_25, modal.lineHeightArea]}>
                     제 5 조 (이용계약의 체결) 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     1. 본 서비스는 마인드엘리베이션 서비스 아이디 서비스를 기반으로 제공되는 서비스입니다. 
                     본 서비스에 가입하여 이용하고자 하는 자는 먼저 이동통신 단말기 내 마인드엘리베이션 서비스 아이디 서비스 가입절차를 진행하거나 
                     본 서비스 가입 시에마인드엘리베이션 서비스 아이디 서비스 가입절차를 병행하여 진행하는 등의 방법으로 마인드엘리베이션 
                     서비스 아이디를 발급 받아야 본 서비스 이용이 가능합니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     2. 회원이 되고자 하는 자(이하 “가입 신청자”)는 회사가 정한 가입 양식에 따라 
                     회원정보를 기입한 후 본 약관에 동의한다는 의사표시를 함으로써 회원가입을 신청하며, 
                     회사는 이러한 신청에 대하여 승낙함으로써 이용계약이 체결됩니다. 
                  </Text>
               </View>
               <View style={margin.bottom_40}>
                  <Text style={[fontColor.hex_000, font.medium, fontSize.size17, margin.bottom_25, modal.lineHeightArea]}>
                     제 6 조 (이용신청 및 승낙) 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     1. 회사는 회원으로 가입할 것을 신청한 가입 신청자에 대하여 서비스 이용을 승낙함을 원칙으로 합니다. 
                     다만, 회사는 다음 각호에 해당하는 신청에 대하여는 승낙을 하지 않거나 이용계약을 해지할 수 있습니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_10, modal.lineHeightArea]}>
                     가. 가입신청자가 본 약관에 의하여 이전에 회원자격을 상실한 적이 있는 경우, 
                     다만 회사의 회원 재가입 승낙을 얻은 경우에는 예외로 합니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_10, modal.lineHeightArea]}>
                     나. 타인의 명의를 이용하는 경우 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_10, modal.lineHeightArea]}>
                     다. 등록 내용에 허위, 기재누락, 오기가 있는 경우
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_10, modal.lineHeightArea]}>
                     라. 기타 회원으로 등록하는 것이 회사의 운영에 현저히 지장이 있다고 판단되는 경우 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     마. 만 14세 미만 아동이 법정대리인(부모 등)의 동의를 얻지 아니한 경우 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     2. 회사는 제1항에 따른 신청에 있어 회원의 종류에 따라 전문기관을 통한 실명확인 및 본인 인증을 요청할 수 있습니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     3. 회사는 서비스 관련 설비의 여유가 없거나, 기술상 또는 업무상 문제가 있는 경우에는 승낙을 유보할 수 있습니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     4. 회사는 제1항과 제3항에 따라 회원가입신청의 승낙을 하지 아니하거나 유보한 경우, 원칙적으로 이를 가입신청자에게 알리도록 합니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     5. 회원 가입시 기재한 등록사항 등 에 변경이 있는 경우, 서비스 내 회원정보 화면을 통하여 수정하거나 회사에 그 변경사항을 알려야 합니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     6. 회원이 제5항의 변경 사항을 수정하지 않거나 회사에 알리지 않아 발생한 불이익에 대하여 회사는 책임지지 않습니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     7. 이용자가 마인드엘리베이션 서비스 아이디 사용에 동의하는 경우, 아이디 및 비밀번호,를 포함한 관련 개인정보는 통합 관리(공유) 될 수 있습니다. 
                     또한 회원이 회원 정보를 변경하는 경우 각 서비스에서 해당 관련 정보들이 동시에 변경될 수 있습니다. 
                  </Text>
               </View>
               <View style={margin.bottom_40}>
                  <Text style={[fontColor.hex_000, font.medium, fontSize.size17, margin.bottom_25, modal.lineHeightArea]}>
                     제 7 조 (이용계약 해지 및 이용 제한 등) 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     1. 회원은 회사에 언제든지 이용계약 해지를 요청할 수 있으며, 회사는 즉시 이를 처리합니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_10, modal.lineHeightArea]}>
                     2. 회원이 다음 각호의 사유에 해당하는 경우, 
                     회사는 이용계약을 해지하거나 기간을 정하여 서비스 이용을 중지할 수 있으며, 
                     해당 게시물을 사전 통지 없이 삭제할 수 있습니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_10, modal.lineHeightArea]}>
                     가. 가입 신청 시에 허위 내용을 등록 한 경우 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_10, modal.lineHeightArea]}>
                     나. 다른 사람의 이용을 방해하거나 그 정보를 도용하는 등 전자거래질서를 위협하는 행위를 한 경우 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_10, modal.lineHeightArea]}>
                     다. 공공질서 및 미풍양속에 반하는 행위를 한 경우 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_10, modal.lineHeightArea]}>
                     라. 서비스 위해를 가하는 등 건전한 이용을 저해하는 경우 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     마. 기타 관련 법령이나 본 약관을 위반하는 행위를 한 경우 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     3. 회사는 이용계약을 해지하거나 서비스 이용을 중지하는 경우, 제23조에 따라 통지합니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     4. 회원은 이용계약 해지 또는 서비스 이용 중지 등에 대해 회사가 정한 절차에 따라 이의신청을 할 수 있습니다. 
                     에 대해 회사가 정당하다고 인정하는 경우 회사는 즉시 서비스의 이용을 재개합니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     5. 회사는 회원이 마지막 접속한 시점으로부터 3개월 동안 서비스 사용 이력이 없는 회원에 대해 사용의사를 묻는 고지를 하고, 
                     회사가 정한 기한 내에 답변이 없는 상태로 접속시점으로부터 1년이 경과할 경우 보관중인 콘텐츠를 삭제할 수 있습니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     6. 이용계약이 해지되는 경우, 콘텐츠도 동시에 삭제되므로 서비스가 해지된 후 발생한 개인정보 및 콘텐츠 손실에 대한 책임은 개인에게 있습니다 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     7. 이용계약이 해지되는 경우, 회사가 회원에게 마인드엘리베이션 서비스 아이디로 제공하는 다른 서비스의 이용계약도 해지될 수 있습니다. 
                  </Text>
               </View>
               <View style={margin.bottom_40}>
                  <Text style={[fontColor.hex_000, font.medium, fontSize.size17, margin.bottom_40, modal.lineHeightArea]}>
                     제3장 서비스 이용 
                  </Text>
                  <Text style={[fontColor.hex_000, font.medium, fontSize.size17, margin.bottom_15, modal.lineHeightArea]}>
                     제 8 조 (서비스 내용) 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     회사는 다음과 같은 서비스를 회원에게 제공합니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     1. 디바이스의 사진이 자동으로 백업되어 편리하게 관리하고 다운로드 할 수 있는 서비스 입니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_10, modal.lineHeightArea]}>
                     2. 클라우드 서비스 회원의 디바이스에 위치하는 폴더에 저장하는 모든 콘텐츠가 자동 싱크되어 편리하게 관리하고, 
                     모든 디바이스에서 동일하게 접근할 수 있는 서비스입니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     ※ 회사의 스토리지 서버에 저장된 콘텐츠는 용량 제한이 있으며, 마지막 접속일로부터 1년 이상 서비스 접속이 없을 경우 모두 삭제될 수 있습니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     3. 기타 회사가 추가 개발하거나 다른 회사와의 제휴계약 등을 통하여 회원에게 제공하는 일체의 서비스
                  </Text>
               </View>
               <View style={margin.bottom_40}>
                  <Text style={[fontColor.hex_000, font.medium, fontSize.size17, margin.bottom_25, modal.lineHeightArea]}>
                      제 9 조 (서비스 이용) 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     1. 회사가 제공하는 서비스 이용은 기본적으로 모든 회원이 이용 가능하나, 회사의 정품 단말기가 아닌 타산의 단말기 소지자 또는 회원 중 특정 기능이 지원되지 않는 이동통신 단말기 소지자는 서비스 이용이 제한될 수 있습니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     2. 회사는 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴, 1일 24시간 서비스를 제공하는 것을 원칙으로 합니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     3. 회사는 회원에 대해 회사의 정책에 따라 등급별로 구분하여 이용시간, 이용횟수, 서비스 메뉴 등을 세분하여 서비스 이용에 차등을 둘 수 있으며, 
                     또한 운영상, 기술상의 필요에 의하여 서비스를 수정, 중단 또는 변경할 수 있습니다. 다만, 이러한 경우에는 그 내용을 사전에 공지합니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     4. 서비스 이용 시 이동통신 사업자가 제공하는 서비스를 통한 데이터 전송이 수반될 수 있습니다. 
                     이에 따라 해당 이동통신 사업자가 해당 서비스 이용료를 청구할 수 있으며, 
                     회사는 통신료 등 이동통신 사업자가 이용자에게 부과한 일체의 서비스 이용료에 대한 책임이 없습니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     5. 회원의 아이디가 중복되어 서비스 제공이 곤란한 경우 회사는 일정 기간을 정하여 회원에게 타인과 중복되지 않는 아이디로 변경할 것을 요청할 수 있습니다. 
                     이외에 회사 서비스 통합, 서비스 사이트 통합, 회사의 중요정책 변경에 따라 아이디(ID)의 본질적인 부분을 변경하지 아니하는 방법으로 아이디를 일괄 변경할 수 있습니다. 
                     이 경우 회사는 회원에게 그 변경 사실을 통지할 수 있습니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     6. 휴면 정책 회원이 최후 실행일로부터 1년 이상 클라우드 라이브 어플리케이션 실행 기록이 없는 경우 해당 회원은 휴면회원으로 자동 전환 되며 등록된 이메일로 공지 후 클라우드 라이브에 저장된 콘텐츠는 모두 완전 삭제 처리 됩니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_10, modal.lineHeightArea]}>
                     가. 적용 대상: 1년 이상 클라우드 서비스를 실행한 기록이 없는 아이디 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_10, modal.lineHeightArea]}>
                  나. 적용 내용: 클라우드 서비스 완전 초기화 (저장된 데이터는 모두 완전 삭제됨) 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_20, modal.lineHeightArea]}>
                   다. 적용 안내: 초기화 전 사용자가 등록한 이메일로 개별 통지 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     휴면 정책은 원활한 서비스를 위한 부득이한 조치임을 먼저 양해 말씀 드리며 의도치 않게 저장 데이터가 소실되는 일이 없도록 세심한 관리 부탁 드립니다.
                  </Text>

                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     7. 데이터 보관 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     회사는 무료로 제공되는 Open Beta 서비스 기간 동안 발생할 수 있는 데이터 유실에 대해 책임지지 않습니다. 
                     유실된 데이터는 복구가 불가능하니 중요한 데이터는 회원께서 별도로 보관하시기를 당부 드립니다. 
                  </Text>
               </View>
               <View style={margin.bottom_40}>
                  <Text style={[fontColor.hex_000, font.medium, fontSize.size17, margin.bottom_25, modal.lineHeightArea]}>
                     제 10 조 (서비스 요금) 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     1. 회사가 제공하는 서비스는 기본적으로 무료입니다. 단, 별도의 유료 서비스의 경우 해당 서비스에 명시된 요금을 지불하여야 이용 가능합니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     2. 회사의 유료 서비스와 관련하여서는 회사가 별도로 정한 약관 및 정책에 따릅니다. 
                  </Text>
               </View>
               <View style={margin.bottom_40}>
                  <Text style={[fontColor.hex_000, font.medium, fontSize.size17, margin.bottom_25, modal.lineHeightArea]}>
                     제 11 조 (서비스의 중단) 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     1. 회사는 컴퓨터 등 정보통신설비의 보수 점검, 교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     2. 회사는 제1항의 사유로 서비스의 제공이 일시 중단되는 경우에는 회사는 사전에 제23조에서 정한 방법으로 통지합니다.
                     단 회사가 통제할 수 없는 사유로 인한 서비스 중단으로 사전 통지가 불가능한 경우에는 그러하지 아니합니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     3. 회사는 사업종목의 전환, 사업의 포기, 업체간의 통합 등의 이유로 서비스를 제공할 수 없게 되는 경우에는 회사는 제23조에 정한 방법으로 회원에게 통지하고 당초 회사에서 제시한 조건에 따라 소비자에게 보상합니다. 
                     다만, 회사가 보상기준 등을 고지하지 아니한 경우에는 회원들의 마일리지 또는 적립금 등을 서비스 이용시에 통용되는 통화가치 상응하는 현물 또는 현금으로 회원에게 지급합니다. 
                  </Text>
               </View>
               <View style={margin.bottom_40}>
                  <Text style={[fontColor.hex_000, font.medium, fontSize.size17, margin.bottom_25, modal.lineHeightArea]}>
                     제 12 조 (정보의 제공 및 광고의 게재) 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     1. 회사는 회원이 서비스 이용 중 필요하다고 인정되는 다양한 정보를 서비스 내 공지사항, 서비스 초기화면, 메시지, SMS, 전자우편 등의 방법으로 회원에게 제공할 수 있습니다. 
                     다만 회원은 관련법에 따른 거래관련 정보 및 고객문의 등에 대한 답변 등을 제외하고 언제든지 위 정보제공에 대한 수신 거절을 할 수 있습니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     2. 회사는 특정 서비스 이용, 서비스 개선 및 신규 서비스 소개 등의 목적으로 회원의 동의 하에 관련 법령에 따라 추가적인 개인정보를 수집할 수 있습니다.
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     3. 회사는 서비스 운영과 관련하여 전자우편(E-mail), 메시지(SMS, MMS), 서비스 화면, 웹 사이트 등에 광고를 게재할 수 있습니다. 
                  </Text>
               </View>
               <View style={margin.bottom_40}>
                  <Text style={[fontColor.hex_000, font.medium, fontSize.size17, margin.bottom_15, modal.lineHeightArea]}>
                     제 13 조 (게시물 및 데이터의 관리) 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     회사는 다음과 같은 사항에 해당하는 게시물이나 데이터를 사전통지 없이 삭제하거나, 이동 또는 등록 거부를 할 수 있으며, 
                     그 게시물의 양과 성격에 따라 서비스 사용 중지 또는 이용계약을 해지할 수 있습니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     1. 서비스를 이용하여 얻은 정보를 회사의 사전 승낙 없이 복제 또는 유통시키거나 상업적으로 이용하는 내용인 경우 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     2. 타인의 명예를 손상시키거나, 타인에게 불이익을 주는 내용인 경우 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     3. 음란물을 게재, 공개 하거나 음란사이트를 연결(링크)하는 경우 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     4. 회사 또는 제3자의 저작권 등 지적재산권을 침해하거나 불법복제를 조장하는 내용인 경우 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     5. 공공질서 및 미풍양속에 위반되는 내용의 정보, 문장, 도형, 음성 등에 해당하는 내용인 경우 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     6. 서비스와 관련된 설비의 오동작이나 정보 등의 파괴 및 혼란을 유발시키는 내용이거나 컴퓨터 바이러스 감염 자료를 등록 또는 유포하는 경우 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     7. 영리를 목적으로 하는 광고성 정보일 경우 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     8. 회사가 공식적으로 인정한 경우를 제외한 서비스를 이용하여 상품을 판매하는 영업 활동 및 해킹, 광고를 통한 수익, 음란 사이트를 통한 상업행위, 상용소프트웨어 불법배포를 하는 경우 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     9. 법률에 의하거나 계약상 또는 위임에 의하여 전송할 수 있는 권리가 없는 내용을 게시, 게재, 전자메일 또는 여하한의 방법으로 전송하거나 공개하는 경우 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     10. 회사에서 규정한 회사의 의무 원칙에 어긋나거나, 게시판의 성격에 부합하지 않는 경우 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     11. 기타 관계법령에 위배된다고 판단되는 경우 
                  </Text>
               </View>
               <View style={margin.bottom_40}>
                  <Text style={[fontColor.hex_000, font.medium, fontSize.size17, margin.bottom_25, modal.lineHeightArea]}>
                     제 14 조 (게시물에 대한 저작권 및 이용제한) 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     1. 회원이 업로드 또는 게시한 게시물에 대한 저작권은 게시자에게 귀속됩니다. 
                     회사는 회원이 게시한 게시물을 이용하고자 하는 경우에는 사전에 회원의 동의를 얻어야 합니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     2. 회원은 서비스를 이용함으로써 얻은 정보를 회사의 사전 승낙 없이 복제, 전송, 출판, 배포, 방송 기타 방법에 의하여 영리 목적으로 이용하거나 제3자에게 이용하게 하여서는 아니 됩니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     3. 회원은 자신이 서비스 내에 게시한 게시물을 회사가 국내ㆍ외에서 다음 각 호의 목적으로 사용하는 것을 허락합니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_10, modal.lineHeightArea]}>
                     가. 서비스 (제3자가 운영하는 사이트 또는 미디어의 일정 영역 내에 입점하여 서비스가 제공되는 경우 포함) 내에서 게시물을 사용하기 위하여 게시물의 크기를 변환하거나 단순화하는 등의 방식으로 수정하는 것 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_10, modal.lineHeightArea]}>
                     나. 회사에서 운영하는 다른 사이트에 게시물을 복제, 전송, 전시하는 것. 다만 회원이 게시물의 복제, 전송, 전시에 동의하지 아니한다는 의사를 표시하는 경우에는 그러하지 않습니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     다. 회사의 서비스를 홍보하기 위한 목적으로 미디어, 통신사 등 서비스 제휴 파트너에게 게시물의 내용을 보도, 방영하게 하는 것. 단, 이 경우 회사는 회원 ID 외에 회원의 별도 동의 없이 개인정보를 제공하지 않습니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     4. 전항의 규정에도 불구하고, 회사가 게시물을 전항 각호에 기재된 목적 이외에 상업적 목적(예: 제3자에게 게시물을 제공하고 금전적 대가를 지급 받는 경우 등)으로 사용할 경우에는 사전에 전화, E-mail 등의 방법으로 회원의 동의를 얻습니다. 이 경우 회사는 회원에게 별도의 보상을 제공합니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     5. 회원이 서비스에 게시물을 게재하는 것은 다른 회원이 게시물을 서비스 내에서 사용하거나 회사가 검색 결과로 사용하는 것을 허락한 것으로 봅니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     6. 회사는 서비스 운영 정책상 또는 회사가 운영하는 사이트 간의 통합 등을 하는 경우 게시물의 내용을 변경하지 아니하고 게시물의 게재 위치를 변경, 이전하거나 사이트 간 공유로 하여 서비스할 수 있으며, 게시물의 이전, 변경 또는 공유를 하는 경우에는 사전에 공지합니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     7. 회사는 회원이 탈퇴한 후에도 회원의 잔존 게시물에 대하여 본 조의 사용권을 유지합니다 
                  </Text>
               </View>
               <View style={margin.bottom_40}>
                  <Text style={[fontColor.hex_000, font.medium, fontSize.size17, margin.bottom_25, modal.lineHeightArea]}>
                     제 15 조 (지적 소유권의 귀속 및 이용제한) 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     1. 회사의 서비스를 통하여 회원에게 제공되는 동영상 또는 음원, 기타 저작물에 대한 지적소유권은 회사, 해당 저작물의 저작권자, MCP(Master Contents Provider) 및 CP(Contents Provider) 등의 권리 소유자에게 있습니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     2. 지적 소유권의 이용제한 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_10, modal.lineHeightArea]}>
                     가. 회원은 정당한 권한이나 해당 프로그램 저작권자의 허락 없이 프로그램 등을 제거, 변경, 복제 하거나 게시, 전송, 링크, 배포하는 경우나 저작자의 실명 또는 익명을 변경 또는 은닉하거나 해당 프로그램의 제호를 변경하여 당사자의 허락 없이 게시/게재할 수 없습니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_10, modal.lineHeightArea]}>
                     나. 회원은 본인이 게재한 소프트웨어 프로그램, 정보, 메시지, 데이터, 문서, 그림, 이미지, 문자, 소리, 퍼스널리티 등의 정보에 대하여 책임이 있으며, 저작권 침해나 기타의 불법으로 인해 발생하는 피해에 대하여 책임을 부담할 것임을 인정합니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_10, modal.lineHeightArea]}>
                     다. 회원은 관련 법규에서 명시적으로 허용한 제한적인 범위 이외에 회사의 프로그램을 리버스 엔지니어링, 디컴파일, 디스어셈블 할 수 없습니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_10, modal.lineHeightArea]}>
                     라. 회원은 회사의 모든 프로그램과 복사본에서 저작권 표시를 제거하거나 변경할 수 없습니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_10, modal.lineHeightArea]}>
                     마. 위 각 항의 피해에 대하여 회원의 과실 또는 고의에 의한 불법행위에 대해서는 회원 본인이 모든 책임을 지며, 회사는 어떠한 책임도 부담하지 않습니다.
                  </Text>
               </View>
               <View style={margin.bottom_40}>
                  <Text style={[fontColor.hex_000, font.medium, fontSize.size17, margin.bottom_40, modal.lineHeightArea]}>
                     제4장 개인정보 
                  </Text>
                  <Text style={[fontColor.hex_000, font.medium, fontSize.size17, margin.bottom_15, modal.lineHeightArea]}>
                     제 16 조 (개인정보 보호) 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     회사는 관련법령이 정하는 바에 따라서 회원 등록정보를 포함한 회원의 개인정보를 보호하기 위하여 노력합니다. 
                     회원의 개인정보 보호에 관해서는 관계법령 및 회사가 정하는 "개인정보 취급방침"이 정한 바에 의합니다. 
                  </Text>
               </View>
               <View style={margin.bottom_40}>
                  <Text style={[fontColor.hex_000, font.medium, fontSize.size17, margin.bottom_40, modal.lineHeightArea]}>
                     제5장 계약 당사자의 의무 
                  </Text>
                  <Text style={[fontColor.hex_000, font.medium, fontSize.size17, margin.bottom_25, modal.lineHeightArea]}>
                     제 18 조 (회사의 의무) 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     1. 회사는 법령과 본 약관이 금지하거나 미풍양속에 반하는 행위를 하지 않으며 본 약관이 정하는 바에 따라 지속적이고, 
                     안정적으로 서비스를 제공하는 데 최선의 노력을 다합니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     2. 회사는 개인정보가 분실, 도난, 누출, 변조 또는 훼손되지 아니하도록 안정성 확보에 필요한 기술적/제도적 대책을 수립하여 안전한 인터넷 서비스 이용을 도모합니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_10, modal.lineHeightArea]}>
                     가. 해킹방지를 위해 자체 첨단 방화벽을 운영하고 있으며 실시간 바이러스 감시시스템을 가동하고 있습니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_10, modal.lineHeightArea]}>
                     나. 전문 운영요원의 24시간 시스템 모니터링을 통한 서비스 다운타임 최소화를 위해 노력하고 있습니다.
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     다. 감사위원회의 감사활동을 통하여 문제가 발견된 경우 바로 시정조치하고 있습니다.
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     3. 회사는 클라이언트가 업데이트 될 경우, 이용자에게 클라이언트 업데이트용 설치 파일을 제공합니다. 업데이트의 상황에 따라 이미 제공된 클라이언트 기능의 일부를 사용할 수 없게 되거나 새로운 기능이 추가되는 경우가 발생할 수 있습니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     4. 회사는 업무와 관련하여 회원의 사전 동의 없이 특정 개인을 알아볼 수 없는 형태로 가공된 회원 전체 또는 일부의 개인정보에 관한 통계자료를 작성하여 이를 사용할 수 있고, 이를 위하여 회원의 디바이스에 쿠키를 전송할 수 있습니다. 
                     이 경우 회원은 쿠키의 수신을 거부하거나 쿠키의 수신에 대하여 경고하도록 사용하는 디바이스의 브라우저 설정을 변경할 수 있으며, 쿠키의 설정 변경에 의해 서비스 이용이 변경되는 것은 회원의 책임입니다. 
                  </Text>
               </View>
               <View style={margin.bottom_40}>
                  <Text style={[fontColor.hex_000, font.medium, fontSize.size17, margin.bottom_25, modal.lineHeightArea]}>
                     제 19 조 (회원의 아이디 및 비밀번호에 대한 의무) 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     1. 아이디와 비밀번호에 관한 관리책임은 회원에게 있습니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     2. 회원은 자신의 아이디 및 비밀번호를 제3자에게 이용하게 해서는 안됩니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                     3. 회원이 자신의 아이디 및 비밀번호를 도난 당하거나 제3자가 사용하고 있음을 인지한 경우에는 바로 회사에 통보하고 회사의 안내가 있는 경우에는 그에 따라야 합니다. 
                  </Text>
               </View>
               <View style={margin.bottom_40}>
                  <Text style={[fontColor.hex_000, font.medium, fontSize.size17, margin.bottom_10, modal.lineHeightArea]}>
                     제 20 조 (회원의 의무) 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_25, modal.lineHeightArea]}>
                      회원은 다음 행위를 하여서는 안됩니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     1. 신청 또는 변경 시 허위내용의 등록 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     2. 회사가 게시한 정보의 변경 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     3. 회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등)의 송신 또는 게시 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     4. 회사 및 기타 제3자의 저작권 등 지적재산권에 대한 침해 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     5. 회사 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     6. 다른 회원의 개인정보 및 계정정보를 수집하는 행위 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     7. 외설 또는 폭력적인 메시지, 화상, 음성 기타 미풍양속에 반하는 정보를 회사에 공개 또는 게시하는 행위 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     8. 회사의 사전 동의 없이 영리 목적의 광고성 정보를 전송하는 등 영리 목적으로 서비스를 사용하는 행위 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     9. 기타 불법적이고 부당한 행위 
                  </Text>
               </View>
               <View style={margin.bottom_40}>
                  <Text style={[fontColor.hex_000, font.medium, fontSize.size17, margin.bottom_40, modal.lineHeightArea]}>
                     제6장 손해배상 및 면책조항 
                  </Text>
                  <Text style={[fontColor.hex_000, font.medium, fontSize.size17, margin.bottom_25, modal.lineHeightArea]}>
                     제 21 조 (손해배상) 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     1. 회사는 회원이 서비스를 이용함에 있어 회사의 고의 또는 중대한 과실로 인하여 입은 손해를 배상할 책임을 부담합니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     2. 회원이 본 약관의 의무를 위반함으로 인하여 회사에 손해를 입힌 경우 또는 회원이 서비스를 이용함에 있어 회사에 손해를 입힌 경우에 회원은 회사에 대하여 그 손해를 배상하여야 합니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     3. 개인위치정보주체는 회사의 위치정보의 보호 및 이용 등에 관한 법률 제15조 내지 제26조의 규정을 위반한 행위로 손해를 입은 경우 회사에 대하여 손해배상을 청구할 수 있습니다. 이 경우 회사는 고의 또는 과실이 없음을 입증하지 아니하면 책임을 면할 수 없습니다. 
                  </Text>
               </View>
               <View style={margin.bottom_40}>
                  <Text style={[fontColor.hex_000, font.medium, fontSize.size17, margin.bottom_25, modal.lineHeightArea]}>
                     제 22 조 (면책) 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     1. 회사는 본 약관에서 달리 정한 것을 제외하고는 서비스에 게재된 어떠한 의견이나 정보에 대하여도 대표성을 가지지 않으며, 회원이나 제3자가 표출한 의견을 승인, 반대 및 수정하지 않습니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     2. 회사는 회원이 게시 또는 전송한 자료 및 본 서비스로부터 회원이 제공받을 수 있는 모든 자료들의 진위, 신뢰성, 정확성 등 그 내용에 대해서는 책임을 부담하지 않습니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     3. 회원은 서비스에 게재된 정보를 스스로의 판단 하에서 자유롭게 이용할 권리가 있으며, 회사는 어떠한 경우라도 회원이 서비스에 게재된 정보에 의해 입은 손해나 피해에 대해 책임이 없습니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     4. 회사는 회원이 제3자의 저작권 등 지적재산권에 속한 데이터나 콘텐츠를 업로드하거나 사용하여 발생한 불이익에 대하여 책임을 지지 않습니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     5. 회사는 회원 간 또는 회원과 제3자 간에 서비스를 매개로 하여 거래 등을 한 경우에는 책임이 없습니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     6. 회사는 회원이 업로드한 데이터나 콘텐츠의 손실에 대해서 책임을 지지 않습니다. 이러한 데이터나 콘텐츠에 대한 보관, 백업 및 저장에 대한 의무는 회원에게 있습니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     7. 회사는 서비스 이용 중에 발생한 콘텐츠나 데이터의 손실, 삭제, 변형, 오류 등에 대해서도 책임지지 않습니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     8. 회사는 회원 또는 제3자의 귀책사유로 인한 서비스 이용 장애 또는 불법행위로 인하여 발생하는 손해에 대하여 책임지지 않습니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     9. 회사는 천재지변 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     10. 회사는 서비스의 효율적 제공을 위한 시스템 개선 공사, 장비증설 및 상향공사 등 계획 공사의 사유로 회원에게 사전 통보한 경우에는 책임을 면합니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     11. 회사는 무료로 제공하는 서비스 이용과 관련하여 회원에게 발생한 어떠한 손해에 대해서도 책임을 지지 않습니다. 
                  </Text>
               </View>
               <View style={margin.bottom_40}>
                  <Text style={[fontColor.hex_000, font.medium, fontSize.size17, margin.bottom_40, modal.lineHeightArea]}>
                     제7장 기타 
                  </Text>
                  <Text style={[fontColor.hex_000, font.medium, fontSize.size17, margin.bottom_25, modal.lineHeightArea]}>
                     제 23 조 (회원에 대한 통지 및 정보제공) 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     1. 회원에 대한 통지는 회원이 회사에 제출한 이메일 주소 또는 휴대폰 메시지 등으로 할 수 있습니다. 이 경우 허위의 전자우편주소 등을 기재하거나 변경된 전자우편주소 등을 회사에 통지하지 아니하여 발생하는 회원의 손해는 회사에게 책임이 없습니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     2. 회사는 불특정다수 회원에 대한 통지의 경우 1주일 이상 회사 공지사항에 게시함으로써 개별 통지에 갈음할 수 있습니다. 다만, 회원 본인의 거래와 관련하여 중대한 영향을 미치는 사항에 대하여는 개별 통지를 합니다 
                  </Text>
               </View>
               <View style={margin.bottom_40}>
                  <Text style={[fontColor.hex_000, font.medium, fontSize.size17, margin.bottom_25, modal.lineHeightArea]}>
                     제 24 조 (연결 사이트간의 관계) 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     1. "연결사이트"란 하이퍼링크(예: 하이퍼링크의 대상에는 문자, 그림 및 동영상 등이 포함됨)방식 등으로 연결된 것을 말합니다 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     2. 회사는 연결사이트가 독자적으로 제공하는 재화 용역에 의해 회원과 행하는 거래에 대해서 보증책임을 지지 않는다는 뜻을 회사에 명시한 경우에는 그 거래에 대한 보증책임을지지 않습니다. 
                  </Text>
               </View>
               <View style={margin.bottom_40}>
                  <Text style={[fontColor.hex_000, font.medium, fontSize.size17, margin.bottom_25, modal.lineHeightArea]}>
                     제 25 조 (해외이용) 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     회사는 대한민국 내에 설치된 서버를 기반으로 서비스를 제공, 관리하고 있습니다. 
                     회사는 회원이 대한민국 영토 이외의 지역에서 서비스를 이용하고자 하는 경우 서비스의 품질 또는 사용성을 보장하지 않습니다. 
                     따라서 회원은 대한민국 영토 이외의 지역에서 서비스를 이용하고자 하는 경우 스스로의 판단과 책임에 따라서 이용 여부를 결정하여야 하고, 
                     특히 서비스 이용과정에서 현지 법령을 준수할 책임은 회원에게 있습니다. 
                  </Text>
               </View>
               <View style={margin.bottom_40}>
                  <Text style={[fontColor.hex_000, font.medium, fontSize.size17, margin.bottom_25, modal.lineHeightArea]}>
                     제 26 조 (분쟁해결) 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     1. 회사는 회원이 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상처리하기 위하여 피해보상처리기구를 설치 운영합니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     2. 회사는 회원으로부터 제출되는 불만사항 및 의견은 우선적으로 그 사항을 처리합니다. 다만, 신속한 처리가 곤란한 경우에는 회원에게 그 사유와 처리일정을 즉시 통보해 드립니다. 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     3. 회사와 회원 간에 발생한 분쟁은 전자거래기본법, 정보통신망이용촉진및정보보호등에관한법률 등 관련법에 의하여 설치된 전자거래분쟁조정위원회 개인정보분쟁조정위원회 등의 조정에 따를 수 있습니다. 
                  </Text>
               </View>
               <View style={margin.bottom_40}>
                  <Text style={[fontColor.hex_000, font.medium, fontSize.size17, margin.bottom_25, modal.lineHeightArea]}>
                     제 27 조 (준거법령 및 재판권) 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     회사와 회원 간에 서비스 이용과 관련하여 발생하는 분쟁과 관련한 소송은 제소 당시의 회원의 주소에 의하고, 
                     주소가 없는 경우에는 거소를 관할하는 지방법원을 전속관할로 합니다. 
                     다만, 제소 당시 회원의 주소 또는 거소가 분명하지 않거나 외국의 거주자의 경우에는 민사소송법상의 관할법원에 제기합니다. 
                  </Text>
               </View>
               <View style={margin.bottom_40}>
                  <Text style={[fontColor.hex_000, font.medium, fontSize.size17, margin.bottom_25, modal.lineHeightArea]}>
                     제 28 조 (회사의 연락처) 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     1. 상호 : 주식회사 마인드엘리베이션 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     2. 대표자 : 이정
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     3. 주 소 : 대구광역시 북구 경대로 17길 47, 12층 1210호 (복현동,IT융합산업빌딩)
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     4. 대표전화 : 1899-9475
                  </Text>
               </View>
               <View style={margin.bottom_40}>
                  <Text style={[fontColor.hex_000, font.medium, fontSize.size17, margin.bottom_25, modal.lineHeightArea]}>
                     부칙 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     (시행일) 본 약관은 2016 년 12월 1일 시행합니다. 
                  </Text>
               </View>
               <View style={margin.bottom_40}>
                  <Text style={[fontColor.hex_000, font.medium, fontSize.size17, margin.bottom_25, modal.lineHeightArea]}>
                     부칙 
                  </Text>
                  <Text style={[fontColor.hex_000, font.regular, margin.bottom_15, modal.lineHeightArea]}>
                     (시행일) 본 약관은 2016 년 12월 1일 시행합니다.
                  </Text>
               </View>
            </ScrollView>
         </View>
      </View>
   </Modal>
);