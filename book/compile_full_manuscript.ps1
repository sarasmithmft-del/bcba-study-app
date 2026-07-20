$ErrorActionPreference = "Stop"

$base = Split-Path -Parent $MyInvocation.MyCommand.Path
$output = Join-Path $base "The_Sacred_Chair_FULL_MANUSCRIPT_COMPILED.md"

$files = @(
    "front_matter_a_note_from_the_chair.md",
    "front_matter_how_to_use_this_book.md",
    "chapter_01_the_most_expensive_chair.md",
    "chapter_02_hygiene_is_not_a_cost_center.md",
    "chapter_03_the_chair_is_sacred_ground.md",
    "chapter_04_connect_the_first_90_seconds.md",
    "chapter_05_hear_and_hunt.md",
    "chapter_06_assess_and_articulate.md",
    "chapter_07_invite.md",
    "chapter_08_reinforce_and_reengage.md",
    "chapter_09_the_double_hygiene_decision_matrix.md",
    "chapter_10_accelerated_and_assisted_hygiene.md",
    "chapter_11_the_hygiene_health_score.md",
    "chapter_12_the_mentor_cadence.md",
    "epilogue_a_letter_to_the_hygienist_reading_this_at_9pm.md"
)

Set-Content -Path $output -Value @"
# Chairnomics: The Golden Chair Playbook

## Full Manuscript (Compiled)

Author: Sara Smith, RDH  
Brand: Chairnomics(TM)

---
"@

foreach ($file in $files) {
    $full = Join-Path $base $file
    if (-not (Test-Path $full)) {
        throw "Missing file: $full"
    }

    Add-Content -Path $output -Value "`r`n`r`n---`r`n"
    Get-Content -Path $full | Add-Content -Path $output
}

Write-Host "Compiled manuscript created:"
Write-Host $output
