import { IVoting } from "../../../interfaces/reducers";

export interface ContentPanelVotingProps {
  getVotingRequest: () => any
  getVotingHistory: () => any
  sendVotingRequest: ({ image_id, vote }: { image_id: string, vote: number }) => any
  sendFavoriteRequest: (image_id: string) => any
  voting: IVoting
}