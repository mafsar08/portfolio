import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import {
  Narrow,
  Wide,
  SectionDivider,
  Eyebrow,
  EditorNote,
  PullQuote,
  KeyDecision,
  Callout,
  ProblemLayer,
  CraftItem,
  Timeline,
  ImagePlaceholder,
  ImageGrid,
  ClosingLine,
  Term,
} from "@/components/case-study/blocks";

export default function AIChatbotCaseStudy() {
  return (
    <>
      {/* ────────────────────────────────────────── */}
      {/* 1 · HERO */}
      {/* ────────────────────────────────────────── */}
      <CaseStudyHero
        eyebrow="Kissflow · AI Assistant · 2025–2026"
        eyebrowIcon
        title='Every AI feature in Kissflow worked one way. I designed the first one that talks back.'
        lead={
          <>
            <p>
              Kissflow already had AI. You could describe a process and it
              would build one. Describe an app, a document, a formula — the AI
              would generate it and stop.{" "}
              <strong>
                Kissflow Intelligence is the first feature where the user and
                the AI actually hold a conversation
              </strong>{" "}
              — ask, get a report or an insight, refine, ask again. This is
              how it came together: across two phases, one technical pivot,
              and a set of trade-offs I&rsquo;d make again.
            </p>
          </>
        }
        meta={[
          { label: "Company", value: "Kissflow" },
          { label: "Role", value: "Senior Product Designer" },
          { label: "Timeline", value: "Oct 2025 – Mar 2026" },
          { label: "Platform", value: "SaaS · No-code Work Platform" },
          { label: "Status", value: "Shipped to Production" },
        ]}
      >
        <EditorNote>
          <strong>Headline — my pick (swap freely):</strong> &ldquo;Every AI
          feature in Kissflow worked one way. I designed the first one that
          talks back.&rdquo; — Alt A: &ldquo;Building Kissflow&rsquo;s first
          AI chatbot — and its first real conversation.&rdquo; Alt B:
          &ldquo;Kissflow&rsquo;s first AI chatbot: from one prompt, one
          artifact — to an actual conversation.&rdquo;
        </EditorNote>
      </CaseStudyHero>

      <Wide>
        <ImageGrid count={3} className="mb-0">
          <ImagePlaceholder
            icon="▶"
            label='The "Ask AI" Trigger'
            desc='The Ask AI pill in the global Kissflow header, beside global search — present on every page.'
            size="hero"
            warm
          />
          <ImagePlaceholder
            icon="◆"
            label="The Onboarding Panel"
            desc="First-open state: the assistant greets the user and explains what it can do — ask, generate, analyze."
            size="hero"
            warm
          />
          <ImagePlaceholder
            icon="◉"
            label="A Response in View"
            desc="A completed answer — an AI-generated chart report inside the conversation, with the trust panel."
            size="hero"
            warm
          />
        </ImageGrid>
        <p className="text-[13px] text-text-muted text-center mt-2.5 italic">
          Three moments, one feature: the entry point, the first-run experience,
          and a conversation in progress.
        </p>
      </Wide>

      <SectionDivider />

      {/* ────────────────────────────────────────── */}
      {/* 2 · CONTEXT */}
      {/* ────────────────────────────────────────── */}
      <section className="py-18 my-2">
        <Narrow>
          <Eyebrow muted>Context</Eyebrow>
          <h2 className="font-serif text-3xl font-semibold leading-snug tracking-tight text-text-primary mb-5">
            The platform, and the place reports come from
          </h2>
          <div className="space-y-5 text-text-body leading-[1.72]">
            <p>
              Kissflow is a no-code work platform where enterprises run their
              operations — processes, boards, datasets, and apps. Every
              approval, every request, every record lives inside it as workflow
              data.
            </p>
            <p>
              To turn that data into reports, Kissflow has a dedicated Analytics
              module: a place to build custom reports and dashboards on top of
              everything happening in the platform. It&rsquo;s capable and
              it&rsquo;s powerful. It&rsquo;s also built for people who think in
              queries, fields, and conditions — which, as the next section gets
              into, is a much smaller group than the set of people who actually
              need answers.
            </p>
            <p>
              I owned the design of Kissflow Intelligence end-to-end — research,
              flows, UI, prototype, and shipped functionality I built myself.
              In the product it ships under the name{" "}
              <Term>Kissflow Intelligence</Term>; throughout this case study
              I&rsquo;ll use that name for the feature.
            </p>
          </div>
        </Narrow>
        <Wide className="mt-10">
          <ImagePlaceholder
            icon="◯"
            label="The Existing Analytics Module"
            desc='The current Kissflow report builder — lightly annotated to show its technical nature: field configuration, conditions, query-like setup. Sets up "powerful, but not for everyone."'
            size="medium"
          />
        </Wide>
      </section>

      <SectionDivider />

      {/* ────────────────────────────────────────── */}
      {/* 3 · THE PROBLEM */}
      {/* ────────────────────────────────────────── */}
      <section className="py-18 my-2">
        <Narrow>
          <Eyebrow>The Problem</Eyebrow>
          <EditorNote>
            <strong>Headline — my pick (swap freely):</strong> &ldquo;The
            people who need answers from Kissflow data are the furthest from
            being able to get them.&rdquo;
          </EditorNote>
          <h2 className="font-serif text-3xl font-semibold leading-snug tracking-tight text-text-primary mb-5">
            The people who need answers from Kissflow data are the furthest from
            being able to get them
          </h2>
          <p className="text-text-body leading-[1.72] mb-2">
            Kissflow holds the data. Getting <Term>insight</Term> out of it is
            where things break down — and they break down in three separate
            ways. None of these is a UI complaint. Together, they&rsquo;re a
            business problem.
          </p>
        </Narrow>

        <Narrow className="mt-6">
          <ProblemLayer num="01" title="The expensive workaround">
            Most enterprise customers don&rsquo;t run Kissflow alone. It sits in
            a stack — ERP, HRMS, Salesforce, HubSpot, Gmail, Sheets, Drive,
            Excel, Slack. And when these companies need serious analysis, they
            export Kissflow data <Term>out</Term> of Kissflow, load it into
            heavyweight analytics platforms like Databricks or Tableau, and
            build their reports there. Data that originated in Kissflow has to
            leave Kissflow to become useful. Companies pay significant licensing
            costs for those external platforms and spend real time on the
            export-and-rebuild cycle, every reporting period. One large
            enterprise customer — a company that runs nearly its entire
            operation on Kissflow, with some of the biggest datasets we see —
            told us something sharper still: even those expensive external
            tools struggled to clear 80% accuracy on AI-generated answers over
            their Kissflow data. So the workaround isn&rsquo;t just costly and
            slow. It isn&rsquo;t even reliably correct.
          </ProblemLayer>
          <ProblemLayer num="02" title="The internal dependency">
            Even inside Kissflow, insight has a gatekeeper. The Analytics
            module is technical by nature — in practice, only IT and technical
            teams can really use it. So when a team manager, an HR partner, an
            admin, or a finance approver needs a report, they don&rsquo;t
            build it. They file a request with IT, wait, and receive a report
            someone else made. The people closest to the question are the
            furthest from the answer.
          </ProblemLayer>
          <ProblemLayer num="03" title="The skill barrier">
            And underneath that dependency is the plain skill gap. The report
            builder speaks in fields, conditions, and platform terminology. For
            a business user who just wants to know how many reimbursements are
            stuck waiting on approval, that&rsquo;s a wall. Even handed full
            access, most wouldn&rsquo;t get through it.
          </ProblemLayer>
        </Narrow>

        <Narrow className="mt-4">
          <PullQuote attribution="Team manager, internal testing">
            I know exactly what I want to see. I just can&rsquo;t build it
            myself — so I raise a request with IT and wait two days for a
            report I could&rsquo;ve described in two sentences.
          </PullQuote>
          <div className="space-y-5 text-text-body leading-[1.72]">
            <p>
              Three different problems, but they share one shape: the insight
              is always slow, second-hand, and expensive — because it always
              depends on someone, or something, other than the person who
              needs it.
            </p>
            <p>
              Kissflow Intelligence exists to collapse all three at once: let a
              business user generate the report or insight themselves, in plain
              language, in a fraction of the time — on data that never leaves
              the platform.
            </p>
          </div>
        </Narrow>

        <Wide className="mt-10">
          <ImagePlaceholder
            icon="◇"
            label="Diagram — The Three Barriers"
            desc='Kissflow data at the center, with the three barriers around it: export to external tools, IT dependency, skill barrier. Keep it conceptual — the long way out vs. the direct way in.'
            size="diagram"
          />
        </Wide>
      </section>

      <SectionDivider />

      {/* ────────────────────────────────────────── */}
      {/* 4 · WHY CONVERSATIONAL */}
      {/* ────────────────────────────────────────── */}
      <section className="py-18 my-2">
        <Narrow>
          <Eyebrow>The Modality</Eyebrow>
          <h2 className="font-serif text-3xl font-semibold leading-snug tracking-tight text-text-primary mb-5">
            A one-way generator would have been the wrong tool
          </h2>
          <div className="space-y-5 text-text-body leading-[1.72]">
            <p>
              The obvious way to build this would have been another one-way
              generator: type a request, get a report. It&rsquo;s the pattern
              every other AI feature in Kissflow already used — the process
              creator, the app and board builders, the integration creator,
              document generation, the formula builder. Each takes a prompt
              and returns an artifact. Done.
            </p>
            <p>
              For an assistant, that pattern would have been wrong — for a
              reason that&rsquo;s easy to miss.
            </p>
            <p>
              Generating a good report is not a one-shot act. It&rsquo;s a
              loop. You get a first draft, then you go deeper — change the
              visualization, add a column, drop one, apply a formula or an
              aggregation, narrow the range — until the thing in front of you
              is the thing you actually needed. That&rsquo;s true of how{" "}
              <Term>people</Term> work.
            </p>
            <p>
              It&rsquo;s also true of how the <Term>AI</Term> works. The
              assistant&rsquo;s responses aren&rsquo;t built to be perfectly
              accurate on the first try. Accuracy grows with context. The more
              the user refines the prompt and points the assistant at the right
              flows, the better the answer gets. The conversation isn&rsquo;t a
              convenience layer sitting on top of the AI — it <Term>is</Term>{" "}
              the mechanism by which the AI arrives at a good answer.
            </p>
            <p>
              A one-way generator would have frozen the experience at its least
              accurate moment — the first guess. A conversation lets the
              answer improve. Choosing the conversational modality wasn&rsquo;t
              following a trend. It was matching the interface to how the
              technology genuinely behaves.
            </p>
          </div>

          <KeyDecision label="Conversational, not generative">
            <p>
              <strong>Considered:</strong> a one-way generator matching
              Kissflow&rsquo;s existing AI features — one prompt, one report.{" "}
              <strong>Chosen:</strong> a two-way conversational assistant.{" "}
              <strong>Why:</strong> report-building is iterative for the user,
              and accuracy is iterative for the AI — it improves as context is
              added. A one-way tool would lock the experience at its least
              accurate point. <strong>Trade-off:</strong> a conversational
              modality was new to the product and asked far more of the design
              — state, history, refinement, the unpredictability of dialogue.
              Accepted, because the modality had to match how the work and the
              technology actually behave.
            </p>
          </KeyDecision>

          <h3 className="font-serif text-xl font-semibold text-text-primary mt-10 mb-3">
            The trend was a tailwind, not the reason
          </h3>
          <div className="space-y-5 text-text-body leading-[1.72]">
            <p>
              That said, the trend mattered — as a tailwind. Conversational AI
              has become a familiar pattern across the tools our customers
              already live in: Notion, Airtable, Monday, Pipefy, and others all
              embed an assistant now. It&rsquo;s reasonable to assume our users
              arrive having already built a mental model of what a chatbot is
              and how to talk to one. Designing Kissflow Intelligence as a
              conversation meant meeting users inside an interaction pattern
              they were already fluent in — not teaching them a new one.
            </p>
            <p>
              And reports were never going to be the whole job. The assistant
              also answers questions about Kissflow itself — the product
              documentation is built into it — and it handles lightweight
              insight that needs no report at all:{" "}
              <Term>which items in my queue need attention right now.</Term>{" "}
              The user reads the answer and acts on it. A conversation holds
              all of those comfortably. A report generator never could.
            </p>
          </div>
        </Narrow>

        <Wide className="mt-10">
          <ImagePlaceholder
            icon="↻"
            label="Diagram — One-way vs. Two-way"
            desc="Left: prompt → artifact → stop (Kissflow's existing AI pattern). Right: a refining loop — prompt → draft → refine → better → refine → there. The loop visibly produces a stronger result."
            size="diagram"
          />
        </Wide>
      </section>

      <SectionDivider />

      {/* ────────────────────────────────────────── */}
      {/* 5 · AMBITION & CONSTRAINT */}
      {/* ────────────────────────────────────────── */}
      <section className="py-18 my-2">
        <Narrow>
          <Eyebrow>The Starting Point</Eyebrow>
          <h2 className="font-serif text-3xl font-semibold leading-snug tracking-tight text-text-primary mb-5">
            I wanted the assistant everywhere. The infrastructure said start
            small.
          </h2>
          <div className="space-y-5 text-text-body leading-[1.72]">
            <p>
              Two things were true at the start of this project, and they
              pulled against each other.
            </p>
            <p>
              The first: Kissflow&rsquo;s data wasn&rsquo;t built to be read by
              AI. It lived in structures optimized for running workflows, not
              for a model to interpret and query. Before any assistant could
              work, our backend engineers built a Semantic Data Layer — an SDL
              — that sits between the AI and the raw data and gives the model
              a clean, structured way to understand what it&rsquo;s looking
              at. The SDL is the foundation the entire feature stands on, and
              it existed early.
            </p>
            <p>
              The second: I had a position on where the assistant belonged. Not
              inside one page. People have questions about their data
              everywhere they work — not only when they happen to be looking
              at a report. An assistant that lives in a corner of one module
              is an assistant most people forget exists. I wanted it global,
              reachable from anywhere in Kissflow, from the start.
            </p>
            <p>
              But the infrastructure of the moment couldn&rsquo;t carry a
              global, ask-anything assistant yet. So I made a call I&rsquo;ll
              come back to twice in this story: build it properly where the
              technology could support it <Term>today</Term>, and design the
              core so that going global later would be a step — not a
              teardown.
            </p>
          </div>

          <KeyDecision label="Holding the vision through the constraint">
            <p>
              I argued for a global assistant from day one. The infrastructure
              couldn&rsquo;t support it yet. Rather than wait, or compromise the
              vision into something permanent, I treated{" "}
              <strong>&ldquo;where it lives&rdquo;</strong> as a constraint
              that would lift — and committed to building a core that
              wouldn&rsquo;t need to be rebuilt when it did.
            </p>
          </KeyDecision>
        </Narrow>

        <Wide className="mt-10">
          <ImagePlaceholder
            icon="◐"
            label="Diagram — How the System Fits Together"
            desc="A clean, plain-language architecture diagram: User → Kissflow Intelligence (conversation) → SDL → Kissflow data. The SDL shown as the translation layer that makes the data AI-readable."
            size="diagram"
          />
        </Wide>
      </section>

      <SectionDivider />

      {/* ────────────────────────────────────────── */}
      {/* 6 · PHASE ONE */}
      {/* ────────────────────────────────────────── */}
      <section className="py-18 my-2">
        <Narrow>
          <Eyebrow>Phase One · Oct–Dec 2025</Eyebrow>
          <h2 className="font-serif text-3xl font-semibold leading-snug tracking-tight text-text-primary mb-5">
            We built the whole core inside one page — and tested it with people
            doing real work
          </h2>
          <div className="space-y-5 text-text-body leading-[1.72]">
            <p>
              Phase one was the assistant living inside the Reports page.
              Scoped, contained, and — given the infrastructure — single-flow:
              you pointed it at one process, or one board, and asked about
              that.
            </p>
            <p>
              Almost everything that defines Kissflow Intelligence as a product
              was designed and built here. The conversational model, the way
              results render, the report preview, the trust panel — the core
              was a Phase 1 creation. Phase 2 would move it; it wouldn&rsquo;t
              reinvent it.
            </p>
          </div>

          <h3 className="font-serif text-xl font-semibold text-text-primary mt-10 mb-3">
            Why the internal testing actually counted
          </h3>
          <div className="space-y-5 text-text-body leading-[1.72]">
            <p>
              Here&rsquo;s something that made the testing in this phase
              genuinely valuable rather than a stand-in for the real thing:
              Kissflow runs on Kissflow. Our own teams use the product every
              day for actual operations — engineering service requests, bug
              tracking, the product roadmap, appraisals and feedback, leave
              management, employee onboarding and offboarding, reimbursements,
              and more.
            </p>
            <p>
              So when I tested Phase 1 internally — with our HR, Admin,
              Support, Sales, and Product teams — I wasn&rsquo;t testing with
              proxies. I was testing with real Kissflow users doing real work
              in the platform. An HR partner asking the assistant about leave
              data was asking about their <Term>actual</Term> leave process.
              That feedback was close to the genuine article.
            </p>
          </div>

          <h3 className="font-serif text-xl font-semibold text-text-primary mt-10 mb-3">
            And then the testing found the ceiling
          </h3>
          <div className="space-y-5 text-text-body leading-[1.72]">
            <p>It worked. It genuinely worked. But the testing surfaced a ceiling.</p>
            <p>
              A single flow is rarely the whole story. Real business data is
              scattered — a process here, a board there, a dataset feeding
              both — and it&rsquo;s stitched together through lookups, where
              one flow pulls fields from another. When someone reviews how a
              request actually moves through the business, the answer almost
              always lives across several flows at once.
            </p>
            <p>
              An assistant that could only ever see one flow at a time
              wasn&rsquo;t wrong. It just wasn&rsquo;t built for how people make
              the decisions that matter. I knew the contained version
              wasn&rsquo;t the destination — the question was what would lift
              the ceiling.
            </p>
          </div>

          <PullQuote attribution="Implementation team, internal testing">
            It&rsquo;s great when I&rsquo;m looking at one process. But when
            I&rsquo;m actually reviewing how something played out, the
            data&rsquo;s spread across three flows. One at a time isn&rsquo;t
            how the business works.
          </PullQuote>

          <KeyDecision label="The trade-off">
            <p>
              I wanted global and multi-flow from the start; the infrastructure
              could support only single-flow, single-page. So I traded scope
              for solidity:{" "}
              <strong>
                build the core properly within the constraint, validate it with
                people who do real work in the product, and keep every part of
                it portable.
              </strong>{" "}
              The trade-off was a narrower v1 — accepted, because the core
              would survive the pivot intact.
            </p>
          </KeyDecision>
        </Narrow>

        <Wide className="mt-10">
          <ImageGrid count={2}>
            <ImagePlaceholder
              icon="◫"
              label="Phase 1 — Assistant Inside the Reports Page"
              desc="The contained, single-flow version: the assistant living within the Reports module, scoped to one flow at a time."
              size="large"
            />
            <ImagePlaceholder
              icon="⬡"
              label="Diagram — One Flow vs. Scattered Reality"
              desc="Left: the assistant pointed at a single flow. Right: a real question pulling from several flows connected by lookups. Shows the ceiling — and previews the lookup mechanic."
              size="large"
            />
          </ImageGrid>
        </Wide>
      </section>

      <SectionDivider />

      {/* ────────────────────────────────────────── */}
      {/* 7 · PHASE TWO */}
      {/* ────────────────────────────────────────── */}
      <section className="py-18 my-2">
        <Narrow>
          <Eyebrow>Phase Two · Jan–Mar 2026</Eyebrow>
          <h2 className="font-serif text-3xl font-semibold leading-snug tracking-tight text-text-primary mb-5">
            A database migration is what finally let the assistant go where
            people needed it
          </h2>
          <div className="space-y-5 text-text-body leading-[1.72]">
            <p>
              The thing standing between us and multi-flow wasn&rsquo;t the
              design. It was the database.
            </p>
            <p>
              Kissflow&rsquo;s data was moving from MongoDB to Snowflake. And
              Snowflake, by its nature, handles exactly the problem Phase 1
              had hit — it can hold and query data spanning multiple flows
              together. Multi-flow context wasn&rsquo;t something we&rsquo;d
              have to invent on top of it. It came with the foundation.
            </p>
            <p>
              Once the migration was solid, the constraint I&rsquo;d designed
              around simply lifted. The SDL could now serve the AI data across
              many connected flows at once. And the moment the assistant could
              see across flows, the case for keeping it boxed in the Reports
              page collapsed — a cross-flow assistant belongs everywhere you
              work.
            </p>
            <p>
              My PM and I made the call together: go global. The assistant
              moved to the platform&rsquo;s global header — the{" "}
              <Term>Ask AI</Term> trigger, sitting right beside global search,
              reachable from anywhere in Kissflow. Search is for finding what
              already exists. Ask AI is for asking what the data can tell you.
              Two halves of the same instinct, side by side.
            </p>
            <p>
              And here&rsquo;s what made Phase 1&rsquo;s trade-off worth it.
              Going global wasn&rsquo;t a rebuild. The core — the conversation
              model, the results, the preview, the trust panel — was already
              built, already tested with people doing real work. Globalizing
              it was a layer of placement and UI changes on a foundation that
              already held. The contained version hadn&rsquo;t been a detour.
              It had been the groundwork.
            </p>
          </div>

          <Timeline
            midLabel="MongoDB → Snowflake"
            phase1={{
              tag: "Phase 1 · Oct–Dec 2025",
              title: "Contained & single-flow",
              body: (
                <>
                  The core built and tested inside the Reports page. One flow
                  at a time. Validated with real in-house Kissflow teams.
                </>
              ),
            }}
            phase2={{
              tag: "Phase 2 · Jan–Mar 2026",
              title: "Global & multi-flow",
              body: (
                <>
                  Snowflake unlocked multi-flow context. The same core moved to
                  the global header — a layer of change, not a rebuild.
                </>
              ),
            }}
          />

          <KeyDecision label="Global vs. contextual">
            <p>
              <strong>Considered:</strong> keep the assistant in the Reports
              page, where it already worked. <strong>Chosen:</strong> move it
              to the global header, available platform-wide.{" "}
              <strong>Why:</strong> once Snowflake enabled multi-flow context,
              the assistant&rsquo;s value was no longer tied to the reports
              context — and data questions happen everywhere.{" "}
              <strong>Trade-off:</strong> a global feature carries a higher bar
              for polish, consistency, and surface area. Accepted — boxing a
              now-capable assistant into one page would have quietly wasted it.
            </p>
          </KeyDecision>
        </Narrow>

        <Wide className="mt-10">
          <ImagePlaceholder
            icon="▶"
            label='Phase 2 — The Global "Ask AI" Trigger'
            desc="The shipped global entry point: the Ask AI pill in the Kissflow header next to global search, with the slide-in panel open beside it."
            size="large"
          />
        </Wide>
      </section>

      <SectionDivider />

      {/* ────────────────────────────────────────── */}
      {/* 8 · DESIGNING FOR TRUST */}
      {/* ────────────────────────────────────────── */}
      <section className="py-18 my-2">
        <Narrow>
          <Eyebrow>The Core Design Problem</Eyebrow>
          <EditorNote>
            <strong>Headline — my pick (swap freely):</strong> &ldquo;An
            answer you can&rsquo;t check is just a guess with
            confidence.&rdquo;
          </EditorNote>
          <h2 className="font-serif text-3xl font-semibold leading-snug tracking-tight text-text-primary mb-5">
            An answer you can&rsquo;t check is just a guess with confidence
          </h2>
          <div className="space-y-5 text-text-body leading-[1.72]">
            <p>
              Going in, I did competitor and AI-principles research — what
              people expect from an AI assistant, and why those assistants lose
              users. One factor sat above all the others: trust. Not speed,
              not cleverness. Trust. And trust in an AI tool fails in a
              specific way — break it once and the user doesn&rsquo;t come
              back. They quietly return to whatever they believed before.
            </p>
            <p>
              For our users the risk was concrete. The assistant returns a
              number. Where did it come from? Did it read the right field?
              Kissflow data is full of fields that resemble each other — a
              &ldquo;Location&rdquo; and a &ldquo;City,&rdquo; a custom field
              and a system-generated one with near-identical names. If the AI
              quietly picked the wrong one, the answer would look completely
              fine and be completely wrong — and the user would have no way of
              knowing until it had already cost them a decision.
            </p>
            <p>
              This is the black box. And it&rsquo;s why an assistant can be
              accurate and still fail: accuracy the user can&rsquo;t{" "}
              <Term>see</Term> isn&rsquo;t trust. It&rsquo;s hope. The bar was
              real and measurable — we were aiming for an 80–95% accuracy
              match, against external tools that, by our largest customer&rsquo;s
              own account, often couldn&rsquo;t clear 80%. But even hitting that
              bar would mean nothing if the user couldn&rsquo;t verify any
              single answer in front of them.
            </p>
          </div>

          <PullQuote attribution="Data admin, large enterprise account">
            It gave me a number. I don&rsquo;t know where it pulled it from.
            We&rsquo;ve got a &lsquo;Location&rsquo; field and a
            &lsquo;City&rsquo; field — if it grabbed the wrong one, my
            report&rsquo;s off and I&rsquo;d never catch it. I&rsquo;m not
            putting that in front of leadership.
          </PullQuote>

          <h3 className="font-serif text-xl font-semibold text-text-primary mt-10 mb-3">
            The solution: transparency on demand
          </h3>
          <div className="space-y-5 text-text-body leading-[1.72]">
            <p>
              The data the AI used was already coming back from the backend.
              The design question was what to do with it.
            </p>
            <p>
              I built the trust solution as transparency on demand. Under every
              AI response sits a quiet <Term>Show details</Term> link. The
              assistant never forces its reasoning on you — most of the time
              you just want the answer — but the moment you want to check,
              it&rsquo;s one click away. Expand it, and there are two tabs.
            </p>
            <p>
              <strong>Sources</strong> shows exactly what the AI looked at —
              the data source it drew from, shown as a chip, and the specific
              fields it referenced from it, each a chip you can click to copy.
              If the AI used a field you didn&rsquo;t expect, you see it
              immediately. The silent &ldquo;Location vs. City&rdquo; mistake
              becomes a visible one.
            </p>
            <p>
              <strong>Query</strong> shows the actual query the AI generated to
              produce your result — the real, formatted, syntax-highlighted
              SQL, in a proper code view, with its own copy action. Not a
              summary of what it did. What it did.
            </p>
          </div>
        </Narrow>

        <Wide className="mt-10">
          <ImageGrid count={2}>
            <ImagePlaceholder
              icon="◧"
              label="Trust Panel — Sources Tab"
              desc='"Show details" expanded on the Sources tab: the datasource chip and the field chips referenced (Category, Product Name, Quantity On Hand, Reorder Level, Stock Status), with the "Response generated" confirmation.'
              size="large"
            />
            <ImagePlaceholder
              icon="❮"
              label="Trust Panel — Query Tab"
              desc="The Query tab: the AI's generated SQL, line-numbered and syntax-highlighted, with its own descriptive comment and a copy action. The ultimate proof for a technical user."
              size="large"
            />
          </ImageGrid>
        </Wide>

        <Narrow>
          <h3 className="font-serif text-xl font-semibold text-text-primary mt-4 mb-3">
            The Query tab was design work that wasn&rsquo;t UI
          </h3>
          <div className="space-y-5 text-text-body leading-[1.72]">
            <p>
              That Query tab is the clearest example of design work that
              wasn&rsquo;t drawing an interface. The generated query existed on
              the backend, but exposing it to users was not a given. I made the
              case to the engineering team that it had to be surfaced —
              because for a technical user, the query is the ultimate proof.
              It&rsquo;s the difference between &ldquo;trust me&rdquo; and
              &ldquo;here is exactly what I did; check it yourself.&rdquo; The
              hard part wasn&rsquo;t designing the panel. It was arguing the
              query onto the roadmap and seeing it through. Good design here
              meant knowing what would earn trust, and pushing for it across
              the team until it shipped.
            </p>
          </div>

          <h3 className="font-serif text-xl font-semibold text-text-primary mt-10 mb-3">
            Closing a loop: the sources you didn&rsquo;t pick
          </h3>
          <div className="space-y-5 text-text-body leading-[1.72]">
            <p>
              There&rsquo;s one more layer, and it closes a loop from Phase 1.
              Kissflow data is connected by lookups — one flow pulling fields
              from another. When the assistant works on a flow you&rsquo;ve
              selected and hits a lookup field, it follows that thread and
              reads the connected flow too. Which means a single answer can
              quietly draw on flows you never explicitly picked.
            </p>
            <p>
              That could easily have become a new black box — the system
              reaching into data you didn&rsquo;t know it was using. So it
              doesn&rsquo;t stay hidden. When a response draws on a flow beyond
              the ones you set as context, that flow shows up in the Sources
              tab alongside the rest. The system expands scope on your behalf
              to get the answer right — and then shows you it did. The help
              never becomes invisible.
            </p>
            <p>
              And underneath everything, one permanent, quiet line beneath the
              input: <Term>these results are AI-generated and require verification.</Term>{" "}
              It doesn&rsquo;t shout. It just sets the right relationship with
              the tool from the first second — this is an assistant, not an
              oracle.
            </p>
          </div>

          <KeyDecision label="Transparency on demand, not always-on">
            <p>
              <strong>Considered:</strong> show sources and the query inline
              with every answer, always visible. <strong>Chosen:</strong> keep
              them one click away behind &ldquo;Show details.&rdquo;{" "}
              <strong>Why:</strong> trust has to be <em>available</em>, not{" "}
              <em>imposed</em> — reasoning pinned under every message buries
              the answer the user asked for and adds load to the majority of
              moments when they just want the result. Depth on demand serves
              both the skimmer and the skeptic. <strong>Trade-off:</strong> a
              first-time user might not discover the panel immediately —
              accepted, because the always-visible verification line still
              sets the honest framing, and the panel is right there the moment
              doubt appears.
            </p>
          </KeyDecision>
        </Narrow>

        <Wide className="mt-10">
          <ImagePlaceholder
            icon="◆"
            label="The Always-Visible Verification Line"
            desc='Close-up of the permanent disclaimer beneath the input — "These results are AI-generated and require verification" — present on every state of the assistant.'
            size="small"
          />
        </Wide>
      </section>

      <SectionDivider />

      {/* ────────────────────────────────────────── */}
      {/* 9 · CONVERSATION & CONTEXT MODEL */}
      {/* ────────────────────────────────────────── */}
      <section className="py-18 my-2">
        <Narrow>
          <Eyebrow>Designing the Interaction</Eyebrow>
          <h2 className="font-serif text-3xl font-semibold leading-snug tracking-tight text-text-primary mb-5">
            The assistant asks you to do one thing before you can type
          </h2>
          <div className="space-y-5 text-text-body leading-[1.72]">
            <p>
              Open Kissflow Intelligence for the first time and it doesn&rsquo;t
              drop you into a blank box. It introduces itself. The panel greets
              you by name and lays out, plainly, what it can do:{" "}
              <Term>ask questions</Term> — insights and stats from your
              workflows; <Term>generate reports</Term> — table, chart, and
              pivot; <Term>analyze insights</Term> — patterns and variations
              in the data. For a modality the product has never had before, the
              first screen&rsquo;s job is to teach without a tutorial. The
              assistant explains itself before it asks anything of you.
            </p>
            <p>
              And then it does ask one thing. Before you can type, you set
              context — you pick the workflows you want to ask about. The
              input stays hidden until you do. In its place:{" "}
              <Term>set context to begin chat.</Term>
            </p>
            <p>
              That was not my first design. What I wanted was an open prompt
              box: you type your question, and the system works out which
              flows you mean from the question itself. You shouldn&rsquo;t have
              to tell an assistant where to look — that&rsquo;s its job.
            </p>
            <p>
              The infrastructure couldn&rsquo;t do that yet. Reliably inferring
              the right flows from free text — turning &ldquo;show me overdue
              reimbursements&rdquo; into the correct set of processes and
              boards — was beyond what the backend could support. And a{" "}
              <Term>wrong</Term> guess about which flow to read is exactly the
              kind of silent error that destroys trust. So I solved it in the
              interface. Making &ldquo;add context&rdquo; a required,
              deliberate step before typing isn&rsquo;t a limitation dressed up
              as a feature — it&rsquo;s an honest answer to a real constraint.
              If the system can&rsquo;t yet infer scope, the user sets it
              explicitly, the AI reads the right data, and the answer can be
              trusted.
            </p>
            <p>
              It&rsquo;s worth being precise about what the backend{" "}
              <Term>can</Term> and <Term>can&rsquo;t</Term> do here, because
              they&rsquo;re different things. It can&rsquo;t infer scope from a
              sentence — that&rsquo;s natural-language interpretation, still
              unsolved. But once you&rsquo;ve named a starting flow, it{" "}
              <Term>can</Term> follow that flow&rsquo;s lookup relationships
              and pull in every connected flow automatically, because those
              connections are explicit in the data model. The user sets the
              starting point because the AI can&rsquo;t read intent from prose.
              The system expands from there because the connections are
              knowable. The backend team is working toward prompt-based
              inference — and when it lands, the mandatory step becomes
              optional. The design is built to give that requirement up.
            </p>
          </div>

          <KeyDecision label="Mandatory context">
            <p>
              <strong>Considered:</strong> an open prompt box with
              backend-inferred flow scope. <strong>Chosen:</strong> require the
              user to select up to three workflows as context before the input
              appears. <strong>Why:</strong> the infrastructure can&rsquo;t yet
              infer scope from free text, and a wrong guess is a trust-breaking
              silent error. Explicit context guarantees the AI starts from the
              right data. <strong>Trade-off:</strong> one extra step before
              the user can ask anything — accepted, because a correct answer
              one step away beats a fast answer that might be quietly wrong.
              Designed to relax: when inference is ready, the step becomes
              optional.
            </p>
          </KeyDecision>
        </Narrow>

        <Wide className="mt-10">
          <ImageGrid count={2}>
            <ImagePlaceholder
              icon="◆"
              label="The Self-Explaining Onboarding State"
              desc="First-open panel: the greeting and the three capabilities — ask questions, generate reports, analyze insights — above 'Set context to begin chat.' Use a current capture of the panel."
              size="medium"
            />
            <ImagePlaceholder
              icon="◐"
              label="The Add-Context Popover"
              desc="The context picker: App / Process / Board / Dataset tabs, search, and a multi-select list. Apps expand to reach the flows inside them; up to three workflows can be selected."
              size="medium"
            />
          </ImageGrid>
        </Wide>

        <Narrow>
          <h3 className="font-serif text-xl font-semibold text-text-primary mt-4 mb-3">
            Keeping context selection light
          </h3>
          <p className="text-text-body leading-[1.72]">
            Context selection itself had to stay light. Users pick up to three
            workflows, organized the way Kissflow already organizes them —
            Apps, Processes, Boards, Datasets — with apps expandable to reach
            the flows inside. Selected workflows sit as chips above the input;
            the cap of three keeps the AI&rsquo;s scope focused and the
            response fast. Switch context mid-conversation and the thread marks
            it with a quiet separator — <Term>context switched to…</Term> — so
            the history stays readable and no answer is ever ambiguous about
            what it was based on.
          </p>

          <h3 className="font-serif text-xl font-semibold text-text-primary mt-10 mb-3">
            The craft of an unpredictable conversation
          </h3>
          <p className="text-text-body leading-[1.72] mb-2">
            A conversation is unpredictable in a way most interfaces
            aren&rsquo;t. You don&rsquo;t know how long a response will take,
            whether it&rsquo;ll be a sentence or a full report, or —
            occasionally — whether it&rsquo;ll succeed. The craft of this
            section was absorbing that uncertainty so the user never feels it
            as chaos. A few of the small decisions I cared most about:
          </p>

          <div>
            <CraftItem title="The loading state" tag="contextual">
              Not a generic spinner. While the AI works, the assistant streams
              real status from the backend — actual progress, phrased to feel
              like the system thinking out loud (
              <Term>&ldquo;creating a chart to show item categories…&rdquo;</Term>
              ), with a small mascot animation. For a brand-new modality, the
              moment of waiting is where confidence is either built or lost. A
              spinner says &ldquo;wait.&rdquo; A line of real progress says
              &ldquo;I&rsquo;ve got it.&rdquo;
            </CraftItem>
            <CraftItem title="Stop and recover" tag="forgiving">
              If a response runs long, or you realize you asked the wrong
              thing, a stop control cancels it — and your typed question
              returns to the input, so nothing is lost. The conversation never
              punishes a change of mind.
            </CraftItem>
            <CraftItem title="Edit and regenerate" tag="iterative">
              First attempts aren&rsquo;t always right. You can edit your last
              prompt, and the assistant replaces the previous report or
              insight in place with an improved one — refining the answer
              without cluttering the thread or starting over. This is the
              accuracy-grows-with-context loop made literal: a better prompt,
              a better result, right where the old one was.
            </CraftItem>
            <CraftItem title="Leave and come back" tag="unblocking">
              Close the panel and the assistant keeps working. When the
              answer&rsquo;s ready, a toast and a badge on the trigger let you
              know. The conversation doesn&rsquo;t hold you hostage while it
              thinks.
            </CraftItem>
          </div>

          <p className="text-text-body leading-[1.72] mt-7">
            None of these is a headline feature. Together they&rsquo;re the
            difference between a modality that feels alive and one that feels
            brittle — and for the product&rsquo;s first conversation, that
            difference was the whole job.
          </p>
        </Narrow>

        <Wide className="mt-10">
          <ImageGrid count={2}>
            <ImagePlaceholder
              icon="◔"
              label="The Contextual Loading State"
              desc="The assistant mid-response: the mascot animation and a live, specific status line streamed from the backend, with the stop control visible."
              size="medium"
            />
            <ImagePlaceholder
              icon="◢"
              label="A Completed Response in the Thread"
              desc='A finished answer: conversational text with key terms emphasized, an inline report card, and the "Show details" trust affordance.'
              size="medium"
            />
          </ImageGrid>
        </Wide>

        <Narrow>
          <h3 className="font-serif text-xl font-semibold text-text-primary mt-4 mb-3">
            Knowing where the assistant should stop
          </h3>
          <div className="space-y-5 text-text-body leading-[1.72]">
            <p>
              One last decision shaped the model: knowing where the assistant
              should stop.
            </p>
            <p>
              The assistant generates a report — but it deliberately
              doesn&rsquo;t try to <Term>be</Term> a report editor. There are
              no chart-type pickers or filter builders inside the chat. A
              generated report can be opened large: it expands into a full-page
              view with the chart or table on one side and the entire
              conversation still docked alongside it, so exploring a result
              never means leaving the thread. But when a user wants to truly
              take that report further — reshape it, save it, own it — one
              action, <Term>edit and save report</Term>, hands it off to
              Kissflow&rsquo;s existing Report Builder, the full-control tool
              built for exactly that.
            </p>
            <p>
              That&rsquo;s intentional. The AI is excellent at the leap from
              nothing to a strong draft in seconds. The Report Builder is
              excellent at precise refinement. Rebuilding the builder inside
              the chat would have meant a weaker copy of a tool we already had.
              The assistant does what only it can do — and then hands off to
              the tool that does the rest, without ever making the user feel
              handed off.
            </p>
          </div>

          <KeyDecision label="Generate, then hand off">
            <p>
              <strong>Considered:</strong> in-chat report editing — chart
              types, fields, filters inside the assistant. <strong>Chosen:</strong>{" "}
              no in-chat editing; a full-page preview with the conversation
              docked alongside, and a one-click handoff to the existing Report
              Builder. <strong>Why:</strong> the AI&rsquo;s strength is the
              zero-to-draft leap; precise editing is already a solved problem
              in a mature tool. <strong>Trade-off:</strong> the user changes
              surfaces to fine-tune a report — accepted, because it avoids a
              half-built editor and keeps the assistant focused on what only
              it can do.
            </p>
          </KeyDecision>
        </Narrow>

        <Wide className="mt-10">
          <ImagePlaceholder
            icon="◧"
            label="The Report Viewer — Split Layout"
            desc='The full-page report view: the chart or table expanded on one side, the full conversation docked on the other, "Edit and save report" in the top corner. Exploring the result without leaving the conversation.'
            size="large"
          />
        </Wide>
      </section>

      <SectionDivider />

      {/* ────────────────────────────────────────── */}
      {/* 10 · BUILDING IT */}
      {/* ────────────────────────────────────────── */}
      <section className="py-18 my-2">
        <Narrow>
          <Eyebrow>Design to Production</Eyebrow>
          <h2 className="font-serif text-3xl font-semibold leading-snug tracking-tight text-text-primary mb-5">
            I didn&rsquo;t just hand off the design. I built parts of the
            shipped assistant myself.
          </h2>
          <div className="space-y-5 text-text-body leading-[1.72]">
            <p>
              The core of Kissflow Intelligence was engineered by the
              development team — the architecture, the data and API layer, the
              real-time backbone, the integration that renders reports inside
              the panel. They took my Figma designs and turned them into the
              production product, and they built a strong, stable foundation.
            </p>
            <p>
              On top of that foundation, I built specific pieces of the shipped
              interface myself, using Claude Code. The most substantial was the{" "}
              <Term>multi-context selector</Term> — the popover where users
              browse apps, processes, boards, and datasets, search across
              them, and multi-select up to three. That component carries one
              of the most important interactions in the whole product — the
              mandatory first step from the last section — and I built it
              end-to-end. I also built smaller interaction details, including
              the scroll-to-bottom behavior in the conversation and the
              collapse behavior for the panel&rsquo;s side rail.
            </p>
          </div>

          <h3 className="font-serif text-xl font-semibold text-text-primary mt-10 mb-3">
            Why I built it myself
          </h3>
          <div className="space-y-5 text-text-body leading-[1.72]">
            <p>
              I did this on purpose, and I think it reflects where product
              design is heading. Across the industry, designers are starting
              to work directly in the codebase — raising pull requests,
              shipping to production — using AI coding tools to close the gap
              between a design and a working feature. Some of my own colleagues
              had already started. The direction felt clear, so I began
              building that capability deliberately: a small feature first,
              then expanding the practice into this one.
            </p>
            <p>
              What made it work here was the team&rsquo;s foundation. Because
              the developers had built the architecture so solidly, I could
              give Claude Code clear context and build functionality{" "}
              <Term>on top of</Term> that base — safely, within established
              patterns — rather than touching anything load-bearing. I&rsquo;m
              specific about this because the line matters. I&rsquo;m not
              claiming the engineering. What I&rsquo;m saying is that I could
              take an interaction from design intent all the way to working,
              shipped code — which meant some details got resolved by{" "}
              <Term>building</Term> them rather than spec&rsquo;ing them and
              hoping they survived translation. For an interaction-heavy
              product like a conversational assistant, being able to close
              that last gap myself changed what I could deliver.
            </p>
          </div>
        </Narrow>

        <Wide className="mt-10">
          <ImagePlaceholder
            icon="✦"
            label="Built by Me — The Multi-Context Selector"
            desc="The add-context popover shown as the working, shipped component — designed and built end-to-end with Claude Code, on top of the dev team's foundation."
            size="medium"
          />
        </Wide>
      </section>

      <SectionDivider />

      {/* ────────────────────────────────────────── */}
      {/* 11 · BIGGER PICTURE & REFLECTION */}
      {/* ────────────────────────────────────────── */}
      <section className="py-18 my-2">
        <Narrow>
          <Eyebrow>What&rsquo;s Next &amp; Reflection</Eyebrow>
          <EditorNote>
            <strong>Section heading — my pick (swap freely):</strong>{" "}
            &ldquo;This isn&rsquo;t a reports chatbot. It&rsquo;s the first
            room of a much bigger house.&rdquo;
          </EditorNote>
          <h2 className="font-serif text-3xl font-semibold leading-snug tracking-tight text-text-primary mb-5">
            This isn&rsquo;t a reports chatbot. It&rsquo;s the first room of a
            much bigger house.
          </h2>
          <div className="space-y-5 text-text-body leading-[1.72]">
            <p>
              Today, Kissflow Intelligence does reports, insights, and
              questions about the product. But that was never the whole
              ambition — and it isn&rsquo;t what I designed the structure for.
            </p>
            <p>
              Kissflow&rsquo;s AI is, right now, scattered. There&rsquo;s an
              AI process creator, an app creator, a board creator, an
              integration builder, document creation, a formula builder — each
              powerful, each separate, each a one-way generator with its own
              entry point. The direction this assistant is built toward is
              consolidation: a single conversational surface where more of
              that work happens in one place, conversationally, instead of
              being hunted down tool by tool.
            </p>
            <p>
              The nearest concrete step is Agents. Kissflow is building agent
              capabilities — where developers create custom agents and end
              users put them to work at runtime — and the plan is to bring
              that agent experience into this assistant. The conversational
              surface I designed isn&rsquo;t only a place to ask for reports.
              It&rsquo;s being shaped as the place those agents will live. I
              designed and structured Kissflow Intelligence as a foundation
              for that future, not as a single-purpose feature. The reports
              assistant is the first room. The architecture is the house.
            </p>
          </div>

          <h3 className="font-serif text-xl font-semibold text-text-primary mt-10 mb-3">
            What I&rsquo;d do differently
          </h3>
          <div className="space-y-5 text-text-body leading-[1.72]">
            <p>
              I&rsquo;d have pushed, earlier, to get the contained Phase 1
              version in front of real customers — not only our internal
              teams. Testing with people who do real work in Kissflow was
              genuinely valuable, and I&rsquo;d defend it. But our own teams
              aren&rsquo;t our customers. Some of what we&rsquo;re learning
              now, as the feature reaches real accounts, could have surfaced
              sooner with even a handful of external users in front of the
              Phase 1 build.
            </p>
            <p>
              I&rsquo;d also have documented the decision trail as it happened.
              Why contextual first, why mandatory context, why push to expose
              the query — the reasoning was sharp in the moment and harder to
              reconstruct later. The thinking is part of the work. It deserves
              to be written down while it&rsquo;s still warm.
            </p>
          </div>

          <h3 className="font-serif text-xl font-semibold text-text-primary mt-10 mb-3">
            Where it stands
          </h3>
          <p className="text-text-body leading-[1.72]">
            Kissflow Intelligence is live, rolling out in phases. It&rsquo;s
            available first to a focused set of customers and to admins — the
            users with the broadest data access — while we gather feedback and
            tune the accuracy of the AI&rsquo;s responses toward that 80–95%
            bar. From there it reaches the people it was ultimately designed
            for: the business users — the team managers, the HR partners, the
            finance approvers — who can&rsquo;t use the Analytics module
            today and shouldn&rsquo;t have to. The phased rollout isn&rsquo;t
            the destination. It&rsquo;s the careful way into it.
          </p>

          <Callout>
            <strong>On the horizon:</strong> Prompt-based context inference —
            retiring the mandatory add-context step. Extending the assistant
            to business and end users for the questions they own. And the
            longer arc — a single conversational surface for Kissflow&rsquo;s
            AI, with custom agents living inside it.
          </Callout>
        </Narrow>
      </section>

      <SectionDivider />

      {/* ────────────────────────────────────────── */}
      {/* CLOSING */}
      {/* ────────────────────────────────────────── */}
      <section className="pt-18 pb-24">
        <Narrow>
          <EditorNote>
            <strong>Closing line — my pick (swap freely):</strong>{" "}
            &ldquo;Kissflow&rsquo;s first AI chatbot answers questions today.
            It was designed to run the conversation tomorrow.&rdquo; — Alt A:
            &ldquo;The hard part was never getting the AI to answer. It was
            building something people could believe, and keep coming back
            to.&rdquo; — Alt B: &ldquo;I designed the first room. I built it
            like there&rsquo;d be a house.&rdquo;
          </EditorNote>
          <ClosingLine>
            Kissflow&rsquo;s first AI chatbot answers questions today. It was
            designed to run the conversation tomorrow.
          </ClosingLine>
          <p className="text-text-muted text-sm mt-2">
            The platform&rsquo;s first two-way conversational feature — built
            across two phases, designed to earn trust, and structured for
            everything that comes next.
          </p>
        </Narrow>
      </section>
    </>
  );
}
