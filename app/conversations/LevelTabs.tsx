import Link from 'next/link';
import { conversationLevels, type ConversationLevelId } from '../data/conversations';

export default function LevelTabs({ active }: { active?: ConversationLevelId }) {
  return (
    <nav aria-label="Conversation levels" className="grid grid-cols-2 sm:grid-cols-4 gap-1 p-1 rounded-2xl bg-ivory-deep mb-8">
      {conversationLevels.map((level) => {
        const isActive = level.id === active;
        return (
          <Link
            key={level.id}
            href={`/conversations/${level.id}`}
            aria-current={isActive ? 'page' : undefined}
            className={`rounded-xl py-2.5 text-center transition-colors ${
              isActive ? 'bg-burgundy text-ivory shadow-md' : 'text-walnut hover:bg-paper'
            }`}
          >
            <span className="block text-sm font-bold">{level.title}</span>
            <span className={`block text-xs font-hindi ${isActive ? 'text-bronze-soft' : 'text-walnut/70'}`}>{level.hindiTitle}</span>
          </Link>
        );
      })}
    </nav>
  );
}
