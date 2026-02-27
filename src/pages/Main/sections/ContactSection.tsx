import {
  FileTextOutlined,
  GithubOutlined,
  MailOutlined,
  MessageOutlined, // ✨ 대화 아이콘 추가
} from "@ant-design/icons";
import { Col, Row, Typography, Flex } from "antd";
import styled from "styled-components";
import SectionHeader from "../../../components/header/SectionHeader";

const { Title, Text, Paragraph } = Typography;

const SectionContainer = styled.section`
  padding: 120px 10vw;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;


const ContactCard = styled.a`
  background-color: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 24px; // 조금 더 둥글게 수정
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  height: 100%;
  text-decoration: none;

  &:hover {
    transform: translateY(-12px);
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 20px 40px rgba(59, 130, 246, 0.15);
    
    .icon-wrapper {
        background: ${({ theme }) => theme.colors.primary};
        color: #fff;
        transform: scale(1.1);
    }
  }
`;

const IconWrapper = styled.div`
  width: 72px;
  height: 72px;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 20px; // 둥근 사각형으로 변경해 트렌디함 추가
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 8px;
  transition: all 0.3s ease;
`;

const ContactTitle = styled(Text)`
  font-size: 1.3rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
`;

const ContactDesc = styled(Text)`
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: 1rem;
  line-height: 1.5;
`;

const IntroMessageBox = styled.div`
  max-width: 850px;
  margin-bottom: 60px;
  padding: 32px; /* 패딩 살짝 축소 */
  background: rgba(59, 130, 246, 0.03);
  border-radius: 20px;
  border: 1px solid rgba(59, 130, 246, 0.15);
  text-align: left; /* 가독성을 위해 좌측 정렬 추천 */
`;

const MessageTitle = styled(Title)`
  &.ant-typography {
    color: #F8FAFC;
    font-size: 1.6rem !important; /* 글씨 크기 축소 */
    font-weight: 800;
    margin-bottom: 16px;
    line-height: 1.4;
  }
`;

const MessageBody = styled(Paragraph)`
  &.ant-typography {
    color: #94A3B8;
    font-size: 0.95rem !important; /* 전체적으로 글씨 크기 축소 */
    line-height: 1.8;
    margin: 0;
    
    strong {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 600;
    }
  }
`;
export default function ContactSection() {
  return (
    <SectionContainer id="contact">
      <SectionHeader
        index="04"
        title="Get In Touch"
        subtitle="안정적인 구조와 사용자 경험을 연결하는 개발자입니다."
      />

    <IntroMessageBox>
        <MessageTitle>
          기술은 도구일 뿐, <br/>
          본질은 문제를 해결하고 성장을 돕는 구조에 있다고 믿습니다.
        </MessageTitle>
        <MessageBody>
          저는 단순히 기능을 구현하는 것을 넘어, <strong>장기적으로 건강하게 유지될 수 있는 서비스의 뼈대</strong>를 고민하는 개발자입니다. 새로운 기술을 무분별하게 쫓기보다는 우리 서비스에 왜 이 기술이 필요한지, 어떤 데이터 구조가 확장에 유리한지를 선별적으로 판단하고 적용하는 과정을 중요하게 생각합니다.  <br/><br/>
          
          특히 기획 단계부터 <strong>'사용자와 운영자가 실제로 겪는 불편'</strong>이 무엇인지 먼저 파악하고, 이를 UI와 API 설계에 자연스럽게 녹여내는 역할을 즐깁니다. 성능 저하나 구조적 한계를 발견했을 때 단순히 인지하는 데 그치지 않고 원인을 분석해 팀원들과 더 나은 방향을 조율하는 과정에서 큰 보람을 얻습니다.  <br/><br/>
          
          무엇보다 <strong>설계 의도와 판단 근거를 투명하게 공유</strong>함으로써, 함께 일하는 동료들이 언제든 믿고 의지할 수 있는 든든한 파트너가 되고 싶습니다. 기술적인 티타임이나 제품에 대한 심도 있는 대화는 언제든 환영입니다! 
        </MessageBody>
      </IntroMessageBox>

      <Row gutter={[24, 24]} style={{ width: "100%", maxWidth: "1000px" }}>
        <Col xs={24} md={8}>
          <ContactCard href="https://github.com/NabongS2" target="_blank">
            <IconWrapper className="icon-wrapper">
              <GithubOutlined />
            </IconWrapper>
            <ContactTitle>GitHub</ContactTitle>
            <ContactDesc>코드 저장소</ContactDesc>
          </ContactCard>
        </Col>

        <Col xs={24} md={8}>
          {/* ✨ 요청하신 대로 텍스트 'Notion 이력서'로 복구 */}
          <ContactCard
            href="https://www.notion.so/JAVA-2324d175f3af80c18e4dc48654c50ff6?source=copy_link"
            target="_blank"
          >
            <IconWrapper className="icon-wrapper">
              <FileTextOutlined />
            </IconWrapper>
            <ContactTitle>Notion 이력서</ContactTitle>
            <ContactDesc>상세 경력 및 <br/>프로젝트 기술서 확인</ContactDesc>
          </ContactCard>
        </Col>

        <Col xs={24} md={8}>
          <ContactCard href="mailto:99lnh@naver.com">
            <IconWrapper className="icon-wrapper">
              <MailOutlined />
            </IconWrapper>
            <ContactTitle>Email</ContactTitle>
            <ContactDesc>협업 제안 및 <br/>문의는 이쪽으로 부탁드립니다.</ContactDesc>
          </ContactCard>
        </Col>
      </Row>
    </SectionContainer>
  );
}