import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './Header';
import Footer from './Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">プライバシーポリシー</h1>
        <p className="mb-4">
          本ウェブサイト上で提供するサービス「gomi-navi」（以下，「当社」といいます。）は，本ウェブサイト上で提供するサービス（以下,「本サービス」といいます。）における，ユーザーの個人情報の取扱いについて，以下のとおりプライバシーポリシー（以下，「本ポリシー」といいます。）を定めます。
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 border-b-2 border-gray-300 pb-2">第1条（個人情報）</h2>
        <p className="mb-4">
          「個人情報」とは，個人情報保護法にいう「個人情報」を指すものとし，生存する個人に関する情報であって，当該情報に含まれる氏名，生年月日，住所，電話番号，連絡先その他の記述等により特定の個人を識別できる情報及び容貌，指紋，声紋にかかるデータ，及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 border-b-2 border-gray-300 pb-2">第2条（個人情報の収集方法）</h2>
        <p className="mb-4">
          本サービスは、ユーザーが利用登録をする際に、GoogleアカウントまたはLINEアカウント情報を取得します。
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 border-b-2 border-gray-300 pb-2">第3条（個人情報を収集・利用する目的）</h2>
        <p className="mb-4">本サービスが個人情報を収集・利用する目的は，以下のとおりです。</p>
        <ol className="list-decimal pl-6 mb-4 space-y-2">
          <li>本サービスの提供・運営のため</li>
          <li>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
          <li>メンテナンス，重要なお知らせなど必要に応じたご連絡のため</li>
          <li>利用規約に違反したユーザーや，不正・不当な目的でサービスを利用しようとするユーザーの特定をし，ご利用をお断りするため</li>
          <li>ユーザーにご自身の登録情報の閲覧や変更，削除，ご利用状況の閲覧を行っていただくため</li>
          <li>上記の利用目的に付随する目的</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-6 mb-2 border-b-2 border-gray-300 pb-2">第4条（利用目的の変更）</h2>
        <ol className="list-decimal pl-6 mb-4 space-y-2">
          <li>本サービスは，利用目的が変更前と関連性を有すると合理的に認められる場合に限り，個人情報の利用目的を変更するものとします。</li>
          <li>利用目的の変更を行った場合には，変更後の目的について，当社所定の方法により，ユーザーに通知し，または本ウェブサイト上に公表するものとします。</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-6 mb-2 border-b-2 border-gray-300 pb-2">第5条（個人情報の第三者提供）</h2>
        <p className="mb-4">
          本サービスは，ユーザーの同意を得ることなく，第三者に個人情報を提供することはありません。ただし，個人情報保護法その他の法令で認められる場合を除きます。
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 border-b-2 border-gray-300 pb-2">第6条（プライバシーポリシーの変更）</h2>
        <ol className="list-decimal pl-6 mb-4 space-y-2">
          <li>本ポリシーの内容は，法令その他本ポリシーに別段の定めのある事項を除いて，ユーザーに通知することなく，変更することができるものとします。
          </li>
          <li>本サービスが別途定める場合を除いて，変更後のプライバシーポリシーは，本ウェブサイトに掲載したときから効力を生じるものとします。
          </li>
        </ol>
      </div>
      <Footer />
    </>

  );
};

export default PrivacyPolicy;


