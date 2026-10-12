import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Banking under Conflict — Online Appendix | Tom Schwantje",
  description: "Online appendix for Banking under Conflict.",
  alternates: {
    canonical: "/banking-conflict-appendix/",
  },
};

export default function AppendixPage() {
  return (
    <main>
      <meta
        httpEquiv="refresh"
        content="0; url=../files/Banking_under_Conflict_Online_Appendix.pdf"
      />
      <p>
        <a href="../files/Banking_under_Conflict_Online_Appendix.pdf">
          Open the Banking under Conflict online appendix PDF
        </a>
      </p>
    </main>
  );
}
