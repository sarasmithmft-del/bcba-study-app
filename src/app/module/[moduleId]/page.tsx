import { HomeLink } from "@/components/HomeLink";
import { ModuleWorkspace } from "@/components/module/ModuleWorkspace";
import { MODULE_INDEX, getModule } from "@/lib/modules";
import { notFound } from "next/navigation";

export const dynamicParams = false;

interface PageProps {
  /** Next 15+ may pass a Promise; older shapes pass a plain object — handle both. */
  params: Promise<{ moduleId: string }> | { moduleId: string };
}

export function generateStaticParams() {
  return MODULE_INDEX.map((module) => ({ moduleId: module.id }));
}

export default async function ModulePage(props: PageProps) {
  const resolved = await Promise.resolve(props.params);
  const moduleId =
    resolved && typeof resolved.moduleId === "string" ? decodeURIComponent(resolved.moduleId).trim() : "";

  if (!moduleId) {
    notFound();
  }

  const studyModule = getModule(moduleId);
  if (!studyModule) {
    notFound();
  }

  return (
    <>
      <div className="border-b border-aba-divider bg-black/55 px-4 py-4 text-[0.8rem] text-aba-muted">
        <HomeLink className="uppercase tracking-[0.26em] text-aba-muted hover:text-aba-fg" />
      </div>
      <ModuleWorkspace key={studyModule.id} module={studyModule} />
    </>
  );
}
