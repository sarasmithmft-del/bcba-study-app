"use client";

import type { GamifiedActivity } from "@/lib/content-types";
import { ChainConstructor } from "./ChainConstructor";
import { MatchToSampleGame } from "./MatchToSampleGame";
import { SafmedsEngine } from "./SafmedsEngine";
import { VocabularyMatchGame } from "./VocabularyMatchGame";

export function GameRegistry({
  moduleId,
  activities,
}: {
  moduleId: string;
  activities: GamifiedActivity[];
}) {
  return (
    <div className="flex flex-col gap-10">
      {activities.map((activity, index) => (
        <div key={`${activity.activity_id}-${index}`}>
          <p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-aba-muted">
            Practice {index + 1}
          </p>
          <p className="mb-4 max-w-[52rem] text-[0.9rem] leading-relaxed text-aba-muted">
            {activity.instructions?.trim() ||
              "Follow the prompts for this practice using the chapter reading; incorrect trials include corrective feedback."}
          </p>
          {renderActivity(moduleId, activity)}
        </div>
      ))}
    </div>
  );
}

function renderActivity(moduleId: string, activity: GamifiedActivity) {
  switch (activity.game_type) {
    case "Match-to-Sample":
    case "Contingency-Matrix-Sorter":
    case "Concept-Classifier-Matrix":
      return <MatchToSampleGame moduleId={moduleId} activity={activity} />;
    case "Behavior-Chain":
      return <ChainConstructor moduleId={moduleId} activity={activity} />;
    case "SAFMEDS":
      return <SafmedsEngine moduleId={moduleId} activity={activity} />;
    case "Vocabulary-Match":
      return <VocabularyMatchGame moduleId={moduleId} activity={activity} />;
    default: {
      const exhaustive: never = activity;
      return exhaustive;
    }
  }
}
