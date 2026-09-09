export type Member = {
  slug: string;
  name: string;
  title: string;
  alias: string;
  specialty: string;
  profile: string;
  notes: string[];
  image: string | null;
  imageStatus: "assigned" | "placeholder";
};

export const members: Member[] = [
  {
    slug: "chen-sihan",
    name: "陈思含",
    title: "辰司寒少帅",
    alias: "军校中叫做辰司寒少帅",
    specialty: "物理师范专业",
    profile:
      "严谨，爱研究理论，爱钻研；生活小白，科研大黑，跳舞大神。",
    notes: ["不要跟陈三争辩。"],
    image: "/images/members/chen-sihan.jpeg",
    imageStatus: "assigned",
  },
  {
    slug: "jiang-yiwei",
    name: "江仪薇",
    title: "帅特洛伊少将",
    alias: "别名帅帅",
    specialty: "自动化专业",
    profile:
      "会做锤锤，也会用锤锤造机器人；是军校的野王，抱上姐姐的大腿不用担心。",
    notes: [],
    image: "/images/members/jiang-yiwei.jpeg",
    imageStatus: "assigned",
  },
  {
    slug: "zhu-chunling",
    name: "朱纯玲",
    title: "朱丽叶妥思妥少尉",
    alias: "朱丽叶妥思妥少尉",
    specialty: "造型与穿搭担当",
    profile: "爱吃、爱玩、爱研究穿搭，目前是群里生日会的造型师。",
    notes: [],
    image: "/images/members/zhu-chunling.jpeg",
    imageStatus: "assigned",
  },
  {
    slug: "lan-kexin",
    name: "蓝可欣",
    title: "蓝诺娃中尉",
    alias: "蓝诺娃中尉",
    specialty: "蓝医生",
    profile:
      "最有神性光辉的蓝医生驾到，要温柔能给你温柔，要辩也能跟你辩。",
    notes: ["战绩可查：曾打败贵州旅游团。"],
    image: "/images/members/lan-kexin.jpeg",
    imageStatus: "assigned",
  },
  {
    slug: "ye-yanying",
    name: "叶彦滢",
    title: "叶尔克斯上将",
    alias: "叶尔克斯上将",
    specialty: "军校校长",
    profile:
      "军校的校长，能回应每个人；刷了三遍五三和必刷题，同时是最强辅助。",
    notes: ["详情可见贵州之战和王者战绩。"],
    image: "/images/members/ye-yanying.jpeg",
    imageStatus: "assigned",
  },
  {
    slug: "ma-wenrui",
    name: "马雯睿",
    title: "马多罗敷上尉",
    alias: "马多罗敷上尉",
    specialty: "攻略担当之一",
    profile:
      "群里的大 J 人之一，后面好像转 P 了；每次旅游做攻略最多的人之一，同时伤害很高，因为她是射手。",
    notes: ["现实战力不详。"],
    image: "/images/members/ma-wenrui.jpeg",
    imageStatus: "assigned",
  },
  {
    slug: "wang-nuoying",
    name: "王诺滢",
    title: "王尔德上将",
    alias: "王尔德上将",
    specialty: "闭关中的科研大拿",
    profile:
      "群里最忙碌之人，一年在军校里发的消息可数，因为真的可数。",
    notes: ["貌似之前是科研大拿，但是最近在闭关中。"],
    image: "/images/members/wang-nuoying.jpeg",
    imageStatus: "assigned",
  },
];

export function getMemberBySlug(slug: string) {
  return members.find((member) => member.slug === slug);
}
