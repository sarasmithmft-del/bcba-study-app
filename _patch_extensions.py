from pathlib import Path

p = Path(r"src/content/modules/extensions.ts")
text = p.read_text(encoding="utf-8")
marker_start = "  MOD13_BLUEPRINT,\n  {\n    id: \"mod14\""
marker_end = "  MOD16_BLUEPRINT,"
start = text.index(marker_start)
end = text.index(marker_end, start)
replacement = "  MOD13_BLUEPRINT,\n  MOD14_BLUEPRINT,\n  MOD15_BLUEPRINT,\n"
new_text = text[:start] + replacement + text[end:]
p.write_text(new_text, encoding="utf-8")
print(f"Removed {end - start} chars; saved {len(new_text)} chars")
