
## Communication

- Be concise and direct
- Explain non-obvious decisions briefly
- Ask before large refactors or architectural changes
- Don't add features not in the project spec
- Never delete files without clarification

## Workflow
This is the common workflow that we will use for every single feature/fix:

1. **Document** - Document the task in @agent_context/current-task.md.
2. **Branch** - Create new branch for feature, fix, etc
3. **Implement** - Implement the feature/fix that I create in @agent_context/current-task.md
4. **Iterate** - Iterate and change things if needed
5. **Commit** - Only after build passes and everything works
6. **Merge** - Merge to `dev`
7. **Delete Branch** - Delete branch after merge
8. **Review** - Review AI-generated code periodically and on demand.
9. Mark as completed in @agent_context/current-task.md and add to history

## Commits

- Ask before committing (don't auto-commit)
- Use conventional commit messages (feat:, fix:, chore:, etc.)
- Keep commits focused (one feature/fix per commit)
- Never put "Generated With Claude", "Co-Authored-By: Claude" or anything related to the code being generated with Claude in the commit messages.
