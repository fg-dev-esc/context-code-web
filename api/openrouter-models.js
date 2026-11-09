import { handleOpenRouterModels } from '../scripts/server.mjs';

export default function handler(req, res) {
  return handleOpenRouterModels(req, res);
}
